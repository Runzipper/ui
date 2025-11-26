import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import { headingStyleVarient } from './heading.css';

type HeadingProps<T extends Text> = {
	textType: T;
	children: ReactNode;
} & ComponentProps<T>;

const classNames: Partial<Record<Text, keyof typeof headingStyleVarient>> = {
	h1: 'primary',
	h2: 'secondary',
};

const Heading = <T extends Text = 'h1'>({
	textType = 'h1' as T,
	children,
	className,
	...props
}: HeadingProps<T>) => {
	const TextTag = textType as ElementType;

	const variantKey = classNames[textType] ?? 'default';
	const mergedClassname = mergeClassnames(
		headingStyleVarient[variantKey],
		className,
	);

	return (
		<TextTag className={mergedClassname} {...props}>
			{children}
		</TextTag>
	);
};

export default Heading;
