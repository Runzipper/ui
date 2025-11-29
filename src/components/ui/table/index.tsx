import Cell from 'components/base/typography/Cell';
import Data from 'components/base/typography/Data';
import Regular from 'components/base/typography/Regular';
import TableContainer from './Container';
import TableHeader from './Header';
import TableRow from './Row';
import { data2Style, dataStyle } from './table.css';

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
						<Cell key={text} textType="span">
							{text}
						</Cell>
					))}
				</TableHeader>
			)}
			{rows.length > 0 ? (
				rows.map((row) => (
					<TableRow key={row.join('-')}>
						<Data className={dataStyle} textType="span">
							{row[0]}
						</Data>
						{row.slice(1).map((cell) => (
							<Regular className={data2Style} key={cell} textType="span">
								{cell}
							</Regular>
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
