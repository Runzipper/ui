import type { Meta, StoryObj } from '@storybook/react-vite';
import Logo from '.';
import { logoVarient } from './logo.css';

const meta = {
	title: 'Design System/UI/Logo',
	component: Logo,
	argTypes: {
		type: {
			control: 'select',
			options: Object.keys(logoVarient),
		},
	},
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		type: 'primary',
	},
};
