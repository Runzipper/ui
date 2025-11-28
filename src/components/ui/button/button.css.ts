import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const buttonStyle = style({
	backgroundColor: vars.color.primary,
	color: vars.color.white,
	borderRadius: vars.radius.lg,
	border: 0,
	paddingBlock: vars.spacing[3],
	paddingInline: vars.spacing[6],
	cursor: 'pointer',

	':hover': {
		backgroundColor: vars.color.primaryHover,
	},

	':active': { backgroundColor: vars.color.primaryActive },
});
