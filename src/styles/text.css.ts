import { globalFontFace } from '@vanilla-extract/css';

export const pretendard = 'Pretendard';

globalFontFace(pretendard, [
	{
		src: 'url("../assets/fonts/Pretendard-Thin.woff2") format("woff2")',
		fontWeight: 100,
	},
	{
		src: 'url("../assets/fonts/Pretendard-ExtraLight.woff2") format("woff2")',
		fontWeight: 200,
	},
	{
		src: 'url("../assets/fonts/Pretendard-Light.woff2") format("woff2")',
		fontWeight: 300,
	},
	{
		src: 'url("../assets/fonts/Pretendard-Regular.woff2") format("woff2")',
		fontWeight: 400,
	},
	{
		src: 'url("../assets/fonts/Pretendard-Medium.woff2") format("woff2")',
		fontWeight: 500,
	},
	{
		src: 'url("../assets/fonts/Pretendard-SemiBold.woff2") format("woff2")',
		fontWeight: 600,
	},
	{
		src: 'url("../assets/fonts/Pretendard-Bold.woff2") format("woff2")',
		fontWeight: 700,
	},
	{
		src: 'url("../assets/fonts/Pretendard-ExtraBold.woff2") format("woff2")',
		fontWeight: 800,
	},
	{
		src: 'url("../assets/fonts/Pretendard-Black.woff2") format("woff2")',
		fontWeight: 900,
	},
]);
