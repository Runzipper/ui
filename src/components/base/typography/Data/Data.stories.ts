import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DataProps } from '.';
import Data from '.';

const meta = {
	component: Data,
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
} satisfies Meta<DataProps<'dt'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		textType: 'dt',
		children: 'This is data typography',
	},
};
