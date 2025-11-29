import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const containerStyle = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
	border: `2px dashed ${vars.color.borderLight}`,
	borderRadius: vars.radius.xl,
	gap: 16,
});

export const containerActiveStyle = style({
	borderColor: vars.color.primary,
	backgroundColor: '#EBF1F8',
});

export const iconStyle = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 68,
	height: 68,
	borderRadius: 32,
	backgroundColor: '#DEECF7',
	color: vars.color.primary,
});

export const descriptionStyle = style({
	letterSpacing: '1px',
});

export const subDescriptionStyle = style({
	letterSpacing: '1px',
	fontWeight: 400,
	color: '#6C7280',
});

export const buttonStyle = style({
	marginTop: 16,
	letterSpacing: '1px',
});

export const inputStyle = style({
	display: 'none',
});
