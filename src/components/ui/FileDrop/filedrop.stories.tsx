import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import FileDrop from '.';

const meta = {
	title: 'Design System/UI/File drop',
	component: FileDrop,
	decorators: [
		(Story) => (
			<div style={{ width: 400, height: 400 }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		accept: {
			control: 'text',
		},
		multiple: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof FileDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		onDropFile: fn(),
		multiple: true,
		accept: '.jpg,.png',
	},
};
