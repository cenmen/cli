import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';
import LayoutIndex from '@/components/Layout';
import { InsertRowBelowOutlined } from '@ant-design/icons';

// 天气模块
const weatherRouter = [
	{
		title: '天气',
		path: '/weather',
		element: <LayoutIndex />,
		icon: <InsertRowBelowOutlined />,
		children: [
			{
				title: '天气列表',
				path: '/weather/list',
				element: lazyLoad(React.lazy(() => import('@/views/weather/list/index')))
			},
			{
				title: '天气详情',
				path: '/weather/detail',
				element: lazyLoad(React.lazy(() => import('@/views/weather/detail/index')))
			}
		]
	}
];

export default weatherRouter;
