import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import { boldStyleVarient } from './bold.css';

export type BoldProps<T extends Text> = {
	textType: T;
	children: ReactNode;
	size?: keyof typeof boldStyleVarient;
} & ComponentProps<T>;

const Bold = <T extends Text = 'p'>({
	textType = 'p' as T,
	size = 'medium',
	children,
	className,
	...props
}: BoldProps<T>) => {
	const TextTag = textType as ElementType;

	return (
		<TextTag
			className={mergeClassnames(boldStyleVarient[size], className)}
			{...props}
		>
			{children}
		</TextTag>
	);
};

export default Bold;
