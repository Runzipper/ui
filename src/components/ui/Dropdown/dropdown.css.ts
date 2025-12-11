import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { Theme } from 'main';

const slideDown = keyframes({
	'0%': {
		opacity: 0,
		transform: 'translateY(-8px)',
	},
	'100%': {
		opacity: 1,
		transform: 'translateY(0)',
	},
});

export const dropdownContainer = style({
	position: 'relative',
	width: 100,
});

export const buttonStyle = style({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: Theme.color.white,
	color: Theme.color.black,
	border: `${Theme.color.borderLight} 1px solid`,

	':hover': {
		backgroundColor: Theme.color.white,
	},
});

export const textStyle = style({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	minWidth: 0,
	flex: 1,
});

export const iconStyle = style({
	width: Theme.spacing['4'],
	height: Theme.spacing['4'],
	marginRight: -12,
	color: Theme.color.borderLight,
	transition: 'color 0.2s ease-in-out',
	flexShrink: 0,

	selectors: {
		[`${buttonStyle}:hover &`]: {
			color: Theme.color.primary,
		},
	},
});

export const listStyle = style({
	listStyle: 'none',
	width: '100%',
	margin: 0,
	padding: 0,
	textAlign: 'center',
	border: `${Theme.color.borderLight} 1px solid`,
	borderRadius: Theme.radius.lg,
	flexDirection: 'column',
	display: 'flex',
	position: 'absolute',
	top: `calc(100% + ${Theme.spacing['1']})`,
	animation: `${slideDown} 0.2s ease-out`,
	backgroundColor: Theme.color.white,
	boxShadow: Theme.shadow.lg,
	zIndex: Theme.z.header,
});

globalStyle(`${listStyle} li`, {
	width: '100%',
});

export const listButtonStyle = style({
	backgroundColor: 'transparent',
	border: 'none',
	borderRadius: Theme.radius.md,
	margin: Theme.spacing['1'],
	cursor: 'pointer',
	width: `calc(100% - ${Theme.spacing['2']})`,
	paddingBlock: Theme.spacing['1'],
	transition: 'background-color 0.2s ease-in-out',

	':hover': {
		backgroundColor: Theme.color.backgroundLight,
	},
});

export const listTextStyle = style({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	width: '100%',
	display: 'block',
});
