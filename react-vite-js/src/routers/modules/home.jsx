import LayoutIndex from '@/components/Layout';
import Home from '@/views/home/index';

// 首页模块
const homeRouter = [
	{
		isHide: true,
		element: <LayoutIndex />,
		path: '/home',
		children: [
			{
				path: '/home/index',
				element: <Home />,
				title: '首页'
			}
		]
	}
];

export default homeRouter;
