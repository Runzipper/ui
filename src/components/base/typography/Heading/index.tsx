import type { ComponentProps, ElementType, ReactNode } from 'react';
import type { Text } from 'types/text';
import { mergeClassnames } from 'utils/mergeClassnames';
import { headingStyleVarient } from './heading.css';

type HeadingType = Extract<Text, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type HeadingProps<T extends HeadingType> = {
	textType: T;
	children: ReactNode;
	size?: keyof typeof headingStyleVarient;
} & ComponentProps<T>;

const Heading = <T extends HeadingType = 'h1'>({
	textType = 'h1' as T,
	size = 'default',
	children,
	className,
	...props
}: HeadingProps<T>) => {
	const TextTag = textType as ElementType;

	const mergedClassname = mergeClassnames(headingStyleVarient[size], className);

	return (
		<TextTag className={mergedClassname} {...props}>
			{children}
		</TextTag>
	);
};

export default Heading;
