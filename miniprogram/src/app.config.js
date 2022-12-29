export default {
	entryPagePath: 'pages/home/home',
	pages: ['pages/home/home', 'pages/info/info', 'pages/me/me', 'pages/webview/webview'],
	window: {
		navigationStyle: 'custom',
	},
	tabBar: {
		color: '#666666',
		selectedColor: '#1fc266',
		list: [
			{
				text: '首页',
				pagePath: 'pages/home/home',
				iconPath: './assets/modules/tabbar/home-icon.png',
				selectedIconPath: './assets/modules/tabbar/home-active-icon.png',
			},
			{
				text: '资讯',
				pagePath: 'pages/info/info',
				iconPath: './assets/modules/tabbar/information-icon.png',
				selectedIconPath: './assets/modules/tabbar/information-active-icon.png',
			},
			{
				text: '我的',
				pagePath: 'pages/me/me',
				iconPath: './assets/modules/tabbar/myself-icon.png',
				selectedIconPath: './assets/modules/tabbar/myself-active-icon.png',
			},
		],
	},
};
