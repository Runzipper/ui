import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const small = style({
	color: vars.color.black,
	fontWeight: 400,
	fontSize: vars.fontSize.sizeSm,
	lineHeight: '20px',
	fontFamily: vars.font.pretendard,
});

export const medium = style({
	color: vars.color.black,
	fontWeight: 400,
	fontSize: vars.fontSize.sizeBase,
	lineHeight: '24px',
	fontFamily: vars.font.pretendard,
});

export const large = style({
	color: vars.color.black,
	fontWeight: 400,
	fontSize: vars.fontSize.sizeLg,
	lineHeight: '28px',
	fontFamily: vars.font.pretendard,
});
