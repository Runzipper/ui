import type { ComponentProps } from 'react';
import { mergeClassnames } from 'utils/mergeClassnames';
import { buttonStyle } from './button.css';

type ButtonProps = ComponentProps<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={mergeClassnames(buttonStyle, className)}>
			{children}
		</button>
	);
};

export default Button;
