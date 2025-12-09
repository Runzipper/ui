import clsx from 'clsx';
import { activeOptionStyle, containerStyle, optionStyle } from './toggle.css';

type ToggleProps<T extends string | number> = {
	option1: { label: string; value: T };
	option2: { label: string; value: T };
	value: T;
	onChange: (value: T) => void;
};

const Toggle = <T extends string | number>({
	option1,
	option2,
	value,
	onChange,
}: ToggleProps<T>) => {
	return (
		<div className={containerStyle}>
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
