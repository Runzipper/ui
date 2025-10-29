import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import * as styles from './regular.css';

export type RegularProps<T extends Text> = {
	textType: T;
	children: ReactNode;
	size: keyof typeof styles;
} & ComponentProps<T>;

const classNames = {
	...styles,
};

const Regular = <T extends Text = 'p'>({
	textType = 'p' as T,
	size = 'medium',
	children,
	className,
	...props
}: RegularProps<T>) => {
	const TextTag = textType as ElementType;

	return (
		<TextTag
			className={mergeClassnames(classNames[size], className)}
			{...props}
		>
			{children}
		</TextTag>
	);
};

export default Regular;
