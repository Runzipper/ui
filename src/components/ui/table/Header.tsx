import type { ComponentProps, ReactElement } from 'react';
import TableRow from './Row';
import { headerStyle } from './table.css';

type TableHeaderProps = {
	children: ReactElement | ReactElement[];
} & ComponentProps<'thead'>;

const TableHeader = ({ children }: TableHeaderProps) => {
	return (
		<thead className={headerStyle}>
			<TableRow>{children}</TableRow>
		</thead>
	);
};

export default TableHeader;
