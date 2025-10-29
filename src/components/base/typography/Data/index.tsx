import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import { dataStyle } from './data.css';

export type DataProps<T extends Text> = {
	textType: T;
	children: ReactNode;
} & ComponentProps<T>;

const Data = <T extends Text = 'dt'>({
	textType,
	className,
	children,
	...props
}: DataProps<T>) => {
	const TextTag = textType as ElementType;

	return (
		<TextTag className={mergeClassnames(dataStyle, className)} {...props}>
			{children}
		</TextTag>
	);
};

export default Data;
