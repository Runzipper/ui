import { IconCheck, IconExclamation, IconX } from 'assets/svg';
import Typography from 'components/base/typography';
import type { ComponentType } from 'react';
import {
	closeButtonVarient,
	notificationStyleVarient,
} from './notification.css';

type NotificationProps = {
	onClose?: VoidFunction;
	type: keyof typeof notificationStyleVarient;
	title?: string;
	description?: string;
};

const icon: Record<NotificationProps['type'], ComponentType | null> = {
	notification: IconCheck,
	warn: IconExclamation,
	default: null,
};

const Notification = ({
	onClose,
	title,
	description,
	type,
}: NotificationProps) => {
	const NotificationIcon = icon[type];

	return (
		<div className={notificationStyleVarient[type]}>
			{NotificationIcon && <NotificationIcon />}
			<div>
				{title && (
					<Typography.Bold textType="p" size="medium">
						{title}
					</Typography.Bold>
				)}
				{description && (
					<Typography.Regular textType="p" size="medium">
						{description}
					</Typography.Regular>
				)}
			</div>
			{onClose && (
				<button
					type="button"
					className={closeButtonVarient[type]}
					onClick={onClose}
				>
					<IconX />
				</button>
			)}
		</div>
	);
};

export default Notification;
