import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

const boldBaseStyle = style({
	color: 'inherit',
	fontWeight: 700,
	fontFamily: vars.font.pretendard,
	margin: 0,
});

export const boldStyleVarient = styleVariants({
	small: [
		boldBaseStyle,
		{
			fontSize: vars.fontSize.sizeSm,
			lineHeight: '20px',
		},
	],
	medium: [
		boldBaseStyle,
		{
			fontSize: vars.fontSize.sizeBase,
			lineHeight: '24px',
		},
	],
	large: [
		boldBaseStyle,
		{
			fontSize: vars.fontSize.sizeXl,
			lineHeight: '28px',
		},
	],
});
