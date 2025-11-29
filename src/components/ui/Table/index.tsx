import Typography from 'components/base/typography';
import TableContainer from './Container';
import TableHeader from './Header';
import TableRow from './Row';
import { dataStyle } from './table.css';

type TableProps = {
	columns: string[];
	rows: string[][];
};

const Table = ({ columns, rows }: TableProps) => {
	return (
		<TableContainer>
			{columns.length && (
				<TableHeader>
					{columns.map((text) => (
						<Typography.Cell key={text} textType="span">
							{text}
						</Typography.Cell>
					))}
				</TableHeader>
			)}
			{rows.length > 0 ? (
				rows.map((row) => (
					<TableRow key={row.join('-')}>
						<Typography.Data textType="span">{row[0]}</Typography.Data>
						{row.slice(1).map((data) => (
							<Typography.Regular
								className={dataStyle}
								key={data}
								textType="span"
							>
								{data}
							</Typography.Regular>
						))}
					</TableRow>
				))
			) : (
				<TableRow>데이터가 없습니다.</TableRow>
			)}
		</TableContainer>
	);
};

export default Table;
