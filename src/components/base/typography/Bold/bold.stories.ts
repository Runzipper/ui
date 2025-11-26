import type { Meta, StoryObj } from '@storybook/react-vite';
import Bold, { type BoldProps } from './index';

const meta = {
	title: 'Design System/Base/Typography/Non Semantic/Bold',
	component: Bold,
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
} satisfies Meta<BoldProps<'p'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
	args: {
		textType: 'p',
		children: 'This is medium Bold.',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		textType: 'p',
		children: 'This is small Bold.',
		size: 'small',
	},
};

export const Large: Story = {
	args: {
		textType: 'p',
		children: 'This is large Bold.',
		size: 'large',
	},
};
