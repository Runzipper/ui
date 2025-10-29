import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const dataStyle = style({
	color: vars.color.black,
	fontWeight: 500,
	fontSize: vars.fontSize.sizeSm,
	fontFamily: vars.font.pretendard,
});
