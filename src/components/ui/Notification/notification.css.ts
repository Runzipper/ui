import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

const notificationBaseStyle = style({
	padding: 17,
	borderWidth: 1,
	borderRadius: vars.radius.lg,
	borderStyle: 'solid',
	display: 'flex',
	position: 'relative',
	gap: 12,
});

const closeButtonBaseStyle = style({
	backgroundColor: 'transparent',
	height: 'fit-content',
	border: 0,
	padding: 0,
	cursor: 'pointer',
});

export const notificationStyleVarient = styleVariants({
	default: [
		notificationBaseStyle,
		{
			borderColor: vars.color.primaryMedium,
			backgroundColor: vars.color.primaryLight,
			color: vars.color.contentLight,
		},
	],
	notification: [
		notificationBaseStyle,
		{
			borderColor: vars.color.successBorder,
			backgroundColor: vars.color.successLight,
			color: vars.color.success,
		},
	],
	warn: [
		notificationBaseStyle,
		{
			borderColor: vars.color.errorBorder,
			backgroundColor: vars.color.errorLight,
			color: vars.color.error,
		},
	],
});

export const closeButtonVarient = styleVariants({
	default: [
		closeButtonBaseStyle,
		{
			color: vars.color.contentLight,
		},
	],
	notification: [closeButtonBaseStyle, { color: vars.color.success }],
	warn: [closeButtonBaseStyle, { color: vars.color.error }],
});
