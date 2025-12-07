import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from '.';

const meta = {
	title: 'Design System/Base/Typography/Semantic/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		textType: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		},
	},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		textType: 'h1',
		children: 'This is primary heading.',
	},
};

export const Secondary: Story = {
	args: {
		textType: 'h2',
		children: 'This is secondary heading.',
	},
};
