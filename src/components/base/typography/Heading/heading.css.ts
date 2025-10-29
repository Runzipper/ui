import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const primary = style({
	color: vars.color.black,
	fontWeight: 700,
	fontSize: vars.fontSize.size5xl,
	letterSpacing: -1.2,
	fontFamily: vars.font.pretendard,
});

export const secondary = style({
	color: vars.color.black,
	fontWeight: 700,
	fontSize: vars.fontSize.size3xl,
	letterSpacing: -0.75,
	fontFamily: vars.font.pretendard,
});

export const defaultStyle = style({
	color: vars.color.black,
	fontWeight: 700,
	fontSize: vars.fontSize.sizeSm,
	fontFamily: vars.font.pretendard,
});
