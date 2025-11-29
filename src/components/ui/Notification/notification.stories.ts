import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import NotificationComponent from '.';
import { notificationStyleVarient } from './notification.css';

const meta = {
	title: 'Design System/UI/Notification',
	component: NotificationComponent,
	argTypes: {
		type: {
			control: 'select',
			options: Object.keys(notificationStyleVarient),
		},
	},
	args: {
		onClose: fn(),
	},
} satisfies Meta<typeof NotificationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Notification: Story = {
	args: {
		type: 'notification',
		title: '파일 압축 해제 성공',
		description:
			'파일이 성공적으로 압축 해제되었습니다. 아래에서 다운로드할 수 있습니다.',
	},
};

export const Warn: Story = {
	args: {
		type: 'warn',
		title: '오류: 파일 압축 해제 실패',
		description:
			'파일 압축 해제 중 오류가 발생했습니다. 파일이 손상되었거나 지원되지 않는 형식일 수 있습니다.\n다시 시도해 주세요.',
	},
};

export const Default: Story = {
	args: {
		type: 'default',
		title: '파일 압축 해제 성공',
		description:
			'파일이 성공적으로 압축 해제되었습니다. 아래에서 다운로드할 수 있습니다.',
	},
};
