import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CellProps } from '.';
import Cell from '.';

const meta = {
	component: Cell,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		textType: {
			control: 'select',
			options: [
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'p',
				'span',
				'strong',
				'em',
			],
		},
	},
} satisfies Meta<CellProps<'dt'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		textType: 'dt',
		children: 'This is cell typography',
	},
};
