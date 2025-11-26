import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const cellStyle = style({
	color: 'inherit',
	fontWeight: 600,
	fontSize: vars.fontSize.sizeSm,
	fontFamily: vars.font.pretendard,
});
