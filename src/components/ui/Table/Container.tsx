import type { ComponentProps, ReactNode } from 'react';
import { mergeClassnames } from 'utils/mergeClassnames';
import { tableContainerStyle } from './table.css';

type TableContainerProps = {
	children?: ReactNode | ReactNode[];
} & ComponentProps<'table'>;

const TableContainer = ({
	className,
	children,
	...props
}: TableContainerProps) => {
	return (
		<table
			className={mergeClassnames(tableContainerStyle, className)}
			{...props}
		>
			{children}
		</table>
	);
};

export default TableContainer;
