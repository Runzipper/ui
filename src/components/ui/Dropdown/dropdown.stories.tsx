import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import Dropdown, { type DropdownItem } from '.';

const meta = {
	title: 'Design System/UI/Dropdown',
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const COMPRESS_MODE: DropdownItem[] = [
	{ label: 'zip', value: 'zip' },
	{ label: 'tar', value: 'tar' },
	{ label: '7z', value: '7z' },
];

export const CompressMode: Story = {
	render: (args) => {
		const [value, setValue] = useState<DropdownItem>(args.items[0]);

		const selectItem = (item: DropdownItem) => {
			setValue(item);
		};

		return <Dropdown {...args} onSelect={selectItem} value={value} />;
	},
	args: {
		items: COMPRESS_MODE,
		value: COMPRESS_MODE[0],
		onSelect: fn(),
	},
};

const LANGUAGE: DropdownItem[] = [
	{ label: 'English', value: 'en' },
	{ label: '日本語', value: 'ja' },
	{ label: '한국어', value: 'ko' },
	{ label: '말레이시아어', value: 'ms' },
	{ label: '중국어', value: 'zh' },
	{ label: '그레이트브리튼 및 북아일랜드 연합왕국', value: 'en-gb' },
];

export const Language: Story = {
	render: (args) => {
		const [value, setValue] = useState<DropdownItem>(args.items[0]);

		const selectItem = (item: DropdownItem) => {
			setValue(item);
		};

		return <Dropdown {...args} onSelect={selectItem} value={value} />;
	},
	args: {
		items: LANGUAGE,
		value: LANGUAGE[0],
		onSelect: fn(),
	},
};
