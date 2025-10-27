import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types';
import { mergeClassnames } from 'utils/mergeClassnames';
import { defaultStyle, primary, secondary } from './title.css';

type HeadingProps<T extends Text> = {
	textType: T;
	children: ReactNode;
} & ComponentProps<T>;

const classNames: Partial<Record<Text, string>> = {
	h1: primary,
	h2: secondary,
};

const Heading = <T extends Text = 'h1'>({
	textType = 'h1' as T,
	children,
	className,
	...props
}: HeadingProps<T>) => {
	const TextTag = textType as ElementType;

	const mergedClassname = mergeClassnames(
		classNames[textType] ?? defaultStyle,
		className,
	);

	return (
		<TextTag className={mergedClassname} {...props}>
			{children}
		</TextTag>
	);
};

export default Heading;
