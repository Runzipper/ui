import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import Toggle from '.';

const OPTION_1 = {
	label: '파일',
	value: 'file',
};
const OPTION_2 = {
	label: '폴더',
	value: 'directory',
};

const meta = {
	title: 'Design System/UI/Toggle',
	component: Toggle,
	decorators: [
		(Story) => {
			return <Story />;
		},
	],
	argTypes: {
		value: {
			control: 'select',
			options: [OPTION_1.value, OPTION_2.value],
		},
	},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value);

		const handleChange = (value: unknown) => {
			setValue(value as typeof args.value);
		};

		return <Toggle {...args} value={value} onChange={handleChange} />;
	},
	args: {
		option1: OPTION_1,
		option2: OPTION_2,
		value: 'file',
		onChange: fn(),
	},
};
