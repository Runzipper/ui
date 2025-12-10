const scanEntry = (entry: FileSystemEntry): Promise<File[]> => {
	return new Promise((resolve, reject) => {
		if (entry.isFile) {
			(entry as FileSystemFileEntry).file(
				(file) => resolve([file]),
				(error) => reject(error),
			);
			return;
		}

		// 디렉토리인 경우 재귀적으로 스캔
		if (entry.isDirectory) {
			const dirReader = (entry as FileSystemDirectoryEntry).createReader();
			const allEntries: FileSystemEntry[] = [];

			// readEntries는 한 번에 최대 100개만 반환하므로 반복 호출 필요
			const readAllEntries = () => {
				dirReader.readEntries(
					(entries) => {
						if (entries.length === 0) {
							// 모든 항목을 읽었으면 병렬로 처리
							Promise.all(allEntries.map((entry) => scanEntry(entry)))
								.then((results) => resolve(results.flat()))
								.catch((error) => reject(error));
						} else {
							// 더 읽을 항목이 있으면 누적 후 계속 읽기
							allEntries.push(...entries);
							readAllEntries();
						}
					},
					(error) => reject(error),
				);
			};

			readAllEntries();
		}
	});
};

export default scanEntry;
