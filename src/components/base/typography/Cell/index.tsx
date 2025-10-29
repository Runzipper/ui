import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import { cellStyle } from './cell.css';

export type CellProps<T extends Text> = {
	textType: T;
	children: ReactNode;
} & ComponentProps<T>;

const Cell = <T extends Text = 'dt'>({
	textType,
	className,
	children,
	...props
}: CellProps<T>) => {
	const TextTag = textType as ElementType;

	return (
		<TextTag className={mergeClassnames(cellStyle, className)} {...props}>
			{children}
		</TextTag>
	);
};

export default Cell;
