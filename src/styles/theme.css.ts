import { createGlobalTheme } from '@vanilla-extract/css';
import { pretendard } from './text.css';

const PRIMARY = '#137FEC';
const SUCCESS = '#10B981';
const ERROR = '#EF4444';

export const vars = createGlobalTheme(':root', {
	color: {
		// Primary
		primary: PRIMARY,
		primaryHover: '#1270D3',
		primaryActive: '#0F5EB8',
		primaryLight: `oklch(from ${PRIMARY} calc(l * 0.1) c h)`,
		primaryMedium: `oklch(from ${PRIMARY} calc(l * 0.2) c h)`,

		// Background
		backgroundLight: '#F6F7F8',
		backgroundDark: '#101922',

		// Content
		contentLight: '#E5E7EB',
		contentDark: '#1F2937',

		// Subtle
		subtleLight: '#E5E7EB',
		subtleDark: '#1F2937',

		// Border
		borderLight: '#E5E7EB',
		borderDark: '#374151',

		// Success
		success: SUCCESS,
		successLight: `oklch(from ${SUCCESS} calc(l * 0.1) c h)`,
		successBorder: `oklch(from ${SUCCESS} calc(l * 0.2) c h)`,
		successHover: `oklch(from ${SUCCESS} calc(l * 0.7) c h)`,

		// Error
		error: ERROR,
		errorLight: `oklch(from ${ERROR} calc(l * 0.1) c h)`,
		errorBorder: `oklch(from ${ERROR} calc(l * 0.2) c h)`,
		errorHover: `oklch(from ${ERROR} calc(l * 0.7) c h)`,

		// Base
		black: '#1F2937',
		white: '#FFF',
	},
	fontSize: {
		// Sizes
		sizeXs: '12px',
		sizeSm: '14px',
		sizeBase: '16px',
		sizeLg: '18px',
		sizeXl: '20px',
		size2xl: '24px',
		size3xl: '30px',
		size4xl: '36px',
		size5xl: '48px',
	},
	spacing: {
		'1': '4px',
		'2': '8px',
		'3': '12px',
		'4': '16px',
		'6': '24px',
		'8': '32px',
		'12': '48px',
		'16': '64px',
	},
	radius: {
		default: '8px',
		md: '6px',
		lg: '12px',
		xl: '16px',
		full: '9999px',
	},
	border: {
		width1: '1px',
		width2: '2px',
	},
	shadow: {
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	},
	blur: {
		sm: '4px',
	},
	z: {
		header: '50px',
	},
	font: {
		pretendard: pretendard,
	},
});
