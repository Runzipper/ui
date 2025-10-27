import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import type { Text } from 'types';
import Heading from './index';

type HeadingProps = {
	textType: Text;
	children: ReactNode;
};

const meta = {
	component: Heading,
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
} satisfies Meta<HeadingProps>;

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
