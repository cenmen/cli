import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';
import LayoutIndex from '@/components/Layout';
import { InsertRowBelowOutlined } from '@ant-design/icons';
import { VIEW_WEATHER, VIEW_WEATHER_LIST, VIEW_WEATHER_DETAIL } from '@/constants/modules/route';

// 天气模块
const weatherRouter = [
	{
		title: '天气',
		path: VIEW_WEATHER,
		element: <LayoutIndex />,
		icon: <InsertRowBelowOutlined />,
		children: [
			{
				title: '天气列表',
				path: VIEW_WEATHER_LIST,
				element: lazyLoad(React.lazy(() => import('@/views/Weather/List')))
			},
			{
				title: '天气详情',
				path: VIEW_WEATHER_DETAIL,
				element: lazyLoad(React.lazy(() => import('@/views/Weather/Detail')))
			}
		]
	}
];

export default weatherRouter;
