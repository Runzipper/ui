import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

const baseStyle = style({
	width: 32,
	height: 32,
	borderRadius: 16,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const logoVarient = styleVariants({
	primary: [
		baseStyle,
		{
			backgroundColor: vars.color.primary,
			color: vars.color.white,
		},
	],
	secondary: [
		baseStyle,
		{
			backgroundColor: 'transparent',
			color: vars.color.primary,
		},
	],
});
