import type { Meta, StoryObj } from '@storybook/react-vite';
import Regular, { type RegularProps } from './index';

const meta = {
	title: 'Design System/Base/Typography/Non Semantic/Regular',
	component: Regular,
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
} satisfies Meta<RegularProps<'p'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
	args: {
		textType: 'p',
		children: 'This is medium Regular.',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		textType: 'p',
		children: 'This is small Regular.',
		size: 'small',
	},
};

export const Large: Story = {
	args: {
		textType: 'p',
		children: 'This is large Regular.',
		size: 'large',
	},
};
