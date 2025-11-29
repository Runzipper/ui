import type { ReactNode } from 'react';
import { rowStyle } from './table.css';

type RowProps = { children?: ReactNode };

const TableRow = ({ children }: RowProps) => {
	return <tr className={rowStyle}>{children}</tr>;
};

export default TableRow;
