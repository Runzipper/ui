import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

const headingBaseStyle = style({
	color: 'inherit',
	fontFamily: vars.font.pretendard,
	margin: 0,
});

export const headingStyleVarient = styleVariants({
	primary: [
		headingBaseStyle,
		{
			fontWeight: 700,
			fontSize: vars.fontSize.size5xl,
			letterSpacing: -1.2,
		},
	],
	secondary: [
		headingBaseStyle,
		{
			fontWeight: 700,
			fontSize: vars.fontSize.size3xl,
			letterSpacing: -0.75,
		},
	],
	default: [
		headingBaseStyle,
		{
			fontWeight: 700,
			fontSize: vars.fontSize.sizeSm,
		},
	],
});
