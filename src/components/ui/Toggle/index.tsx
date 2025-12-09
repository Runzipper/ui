import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { mergeClassnames } from 'utils/mergeClassnames';
import { activeOptionStyle, containerStyle, optionStyle } from './toggle.css';

type ToggleProps<T extends string | number> = {
	option1: { label: string; value: T };
	option2: { label: string; value: T };
	value: T;
	onChange: (value: T) => void;
} & ComponentProps<'div'>;

const Toggle = <T extends string | number>({
	option1,
	option2,
	value,
	onChange,
	className,
	...props
}: ToggleProps<T>) => {
	return (
		<div {...props} className={mergeClassnames(containerStyle, className)}>
			<button
				type="button"
				className={clsx(
					optionStyle,
					value === option1.value && activeOptionStyle,
				)}
				value={option1.value}
				onClick={() => onChange(option1.value)}
			>
				{option1.label}
			</button>
			<button
				type="button"
				className={clsx(
					optionStyle,
					value === option2.value && activeOptionStyle,
				)}
				value={option2.value}
				onClick={() => onChange(option2.value)}
			>
				{option2.label}
			</button>
		</div>
	);
};

export default Toggle;
