import { IconAngleDown } from 'assets/svg';
import clsx from 'clsx';
import Regular from 'components/base/typography/Regular';
import useClickOutside from 'hooks/useClickOutside';
import { useRef, useState } from 'react';
import Button from '../Button';
import {
	buttonStyle,
	dropdownContainer,
	iconStyle,
	listButtonStyle,
	listStyle,
	listTextStyle,
	textStyle,
} from './dropdown.css';

export type DropdownItem = {
	label: string;
	value: string;
};

type DropdownProps = {
	items: DropdownItem[];
	value: DropdownItem;
	onSelect: (item: DropdownItem) => void;
	className?: string;
};

const Dropdown = ({ items, value, onSelect, className }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, () => setIsOpen(false));

	const handleOpenMenu = () => {
		setIsOpen((state) => !state);
	};

	const handleSelectItem = (item: DropdownItem) => {
		onSelect(item);
		setIsOpen(false);
	};

	return (
		<div className={clsx(dropdownContainer, className)} ref={ref}>
			<Button className={buttonStyle} onClick={handleOpenMenu}>
				<Regular className={textStyle} textType="span">
					{value.label}
				</Regular>
				<IconAngleDown className={iconStyle} />
			</Button>
			{isOpen && (
				<ul className={listStyle} popover="auto">
					{items.map((item) => (
						<li key={item.value}>
							<button
								onClick={() => handleSelectItem(item)}
								className={listButtonStyle}
								type="button"
							>
								<Regular className={listTextStyle} textType="span">
									{item.label}
								</Regular>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
