import { globalFontFace } from '@vanilla-extract/css';

export const pretendard = 'Pretendard';

globalFontFace(pretendard, [
	{
		src: 'url("/fonts/Pretendard-Thin.woff2") format("woff2")',
		fontWeight: 100,
	},
	{
		src: 'url("/fonts/Pretendard-ExtraLight.woff2") format("woff2")',
		fontWeight: 200,
	},
	{
		src: 'url("/fonts/Pretendard-Light.woff2") format("woff2")',
		fontWeight: 300,
	},
	{
		src: 'url("/fonts/Pretendard-Regular.woff2") format("woff2")',
		fontWeight: 400,
	},
	{
		src: 'url("/fonts/Pretendard-Medium.woff2") format("woff2")',
		fontWeight: 500,
	},
	{
		src: 'url("/fonts/Pretendard-SemiBold.woff2") format("woff2")',
		fontWeight: 600,
	},
	{
		src: 'url("/fonts/Pretendard-Bold.woff2") format("woff2")',
		fontWeight: 700,
	},
	{
		src: 'url("/fonts/Pretendard-ExtraBold.woff2") format("woff2")',
		fontWeight: 800,
	},
	{
		src: 'url("/fonts/Pretendard-Black.woff2") format("woff2")',
		fontWeight: 900,
	},
]);
