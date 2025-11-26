import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '.';

const meta = {
	title: 'Design System/UI/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'button',
	},
};
