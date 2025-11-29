import { IconCloud } from 'assets/svg';
import clsx from 'clsx';
import Bold from 'components/base/typography/Bold';
import Regular from 'components/base/typography/Regular';
import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import Button from '../Button';
import {
	buttonStyle,
	containerActiveStyle,
	containerStyle,
	descriptionStyle,
	iconStyle,
	inputStyle,
	subDescriptionStyle,
} from './filedrop.css';

type FileDropProps = {
	onDropFile: (files: FileList) => void;
	multiple?: boolean;
	accept?: string;
};

const FileDrop = ({ onDropFile, accept, multiple = true }: FileDropProps) => {
	const dropboxRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [isDragging, setIsDragging] = useState(false);

	const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();

		setIsDragging(true);
	};

	const onDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (dropboxRef.current?.contains(e.relatedTarget as Node)) return;

		setIsDragging(false);
	};

	const onDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();

		const files = e.dataTransfer.files;
		if (files?.length) {
			onDropFile(files);
		}

		setIsDragging(false);
	};

	const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files || !files.length) return;

		onDropFile(files);
	};

	const handleInputClick = () => {
		inputRef.current?.click();
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			ref={dropboxRef}
			className={clsx(containerStyle, isDragging && containerActiveStyle)}
			onDragEnter={onDragEnter}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
			onDrop={onDrop}
		>
			<input
				ref={inputRef}
				className={inputStyle}
				accept={accept}
				type="file"
				multiple={multiple}
				onChange={handleFileSelect}
				aria-hidden
			/>
			<div className={iconStyle}>
				<IconCloud />
			</div>
			<Bold size="large" textType="p" className={descriptionStyle}>
				여기에 파일을 드래그 앤 드롭하세요
			</Bold>
			<Regular textType="p" className={subDescriptionStyle}>
				또는 클릭하여 컴퓨터에서 파일을 선택하세요
			</Regular>
			<Button type="button" className={buttonStyle} onClick={handleInputClick}>
				<Bold textType="span" size="medium">
					파일 선택
				</Bold>
			</Button>
		</div>
	);
};

export default FileDrop;
