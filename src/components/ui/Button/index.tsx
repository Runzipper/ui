import type { ComponentProps } from 'react';
import { mergeClassnames } from 'utils/mergeClassnames';
import { buttonStyle, shadowStyle } from './button.css';

type ButtonProps = { showShadow?: boolean } & ComponentProps<'button'>;

const Button = ({
	children,
	className,
	showShadow = false,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={mergeClassnames(
				buttonStyle,
				showShadow ? shadowStyle : undefined,
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
