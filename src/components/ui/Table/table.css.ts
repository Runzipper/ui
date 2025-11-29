import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const tableContainerStyle = style({
	border: `1px solid ${vars.color.borderLight}`,
	borderRadius: vars.radius.lg,
	display: 'block',
	fontSize: vars.fontSize.sizeSm,
});

export const rowStyle = style({
	display: 'flex',
	alignItems: 'center',
	paddingBlock: 12,
	paddingInline: 24,

	selectors: {
		'& + &': {
			borderTop: `1px solid ${vars.color.borderLight}`,
		},
	},
});

export const headerStyle = style({
	display: 'block',

	selectors: {
		'&:not(:last-child)': {
			borderBottom: `1px solid ${vars.color.borderLight}`,
		},
	},
});

export const dataStyle = style({
	fontSize: vars.fontSize.sizeSm,
	fontWeight: 400,
	color: '#6C7280',
});

globalStyle(`${rowStyle} *:first-child`, {
	flexGrow: 2,
	flexBasis: 0,
});

globalStyle(`${rowStyle} *:not(:first-child)`, {
	flexGrow: 1,
	flexBasis: 0,
});
