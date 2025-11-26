import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

const regularBaseStyle = style({
	color: 'inherit',
	fontWeight: 400,
	fontFamily: vars.font.pretendard,
	margin: 0,
	whiteSpace: 'pre-line',
});

export const regularStyleVarient = styleVariants({
	small: [
		regularBaseStyle,
		{
			fontSize: vars.fontSize.sizeSm,
			lineHeight: '20px',
		},
	],
	medium: [
		regularBaseStyle,
		{
			fontSize: vars.fontSize.sizeBase,
			lineHeight: '24px',
		},
	],
	large: [
		regularBaseStyle,
		{
			fontSize: vars.fontSize.sizeLg,
			lineHeight: '28px',
		},
	],
});
