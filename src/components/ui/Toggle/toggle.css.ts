import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const containerStyle = style({
	display: 'inline-flex',
	backgroundColor: vars.color.backgroundLight,
	borderRadius: vars.radius.lg,
	padding: vars.spacing[1],
	gap: vars.spacing[1],
});

export const optionStyle = style({
	fontFamily: vars.font.pretendard,
	backgroundColor: 'transparent',
	color: vars.color.contentDark,
	borderRadius: vars.radius.md,
	border: 0,
	paddingBlock: vars.spacing[2],
	paddingInline: vars.spacing[4],
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	fontWeight: 500,
	fontSize: vars.fontSize.sizeSm,

	':hover': {
		color: vars.color.black,
	},
});

export const activeOptionStyle = style({
	backgroundColor: vars.color.white,
	color: vars.color.primary,
	boxShadow: vars.shadow.md,

	':hover': {
		color: vars.color.primary,
	},
});
