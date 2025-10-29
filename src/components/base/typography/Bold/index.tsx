import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import * as styles from './bold.css';

export type BoldProps<T extends Text> = {
	textType: T;
	children: ReactNode;
	size: keyof typeof styles;
} & ComponentProps<T>;

const classNames = {
	...styles,
};

const Bold = <T extends Text = 'p'>({
	textType = 'p' as T,
	size = 'medium',
	children,
	className,
	...props
}: BoldProps<T>) => {
	const TextTag = textType as ElementType;

	const mergedClassname = mergeClassnames(classNames[size], className);

	return (
		<TextTag className={mergedClassname} {...props}>
			{children}
		</TextTag>
	);
};

export default Bold;
