import Typography from 'components/base/typography';
import TableContainer from './Container';
import TableHeader from './Header';
import TableRow from './Row';
import { dataStyle, emptyDataStyle, rowContainer } from './table.css';

type TableProps = {
	columns: string[];
	rows: string[][];
	className: string;
};

const Table = ({ columns, rows, className }: TableProps) => {
	return (
		<TableContainer className={className}>
			{columns.length && (
				<TableHeader>
					{columns.map((text) => (
						<Typography.Cell key={text} textType="th">
							{text}
						</Typography.Cell>
					))}
				</TableHeader>
			)}
			<tbody className={rowContainer}>
				{rows.length > 0 ? (
					rows.map((row) => (
						<TableRow key={row.join('-')}>
							<Typography.Data textType="td">{row[0]}</Typography.Data>
							{row.slice(1).map((data) => (
								<Typography.Regular
									className={dataStyle}
									key={data}
									textType="td"
								>
									{data}
								</Typography.Regular>
							))}
						</TableRow>
					))
				) : (
					<TableRow>
						<Typography.Regular textType="td" className={emptyDataStyle}>
							데이터가 없습니다.
						</Typography.Regular>
					</TableRow>
				)}
			</tbody>
		</TableContainer>
	);
};

export default Table;
