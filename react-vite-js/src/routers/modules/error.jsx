import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';

// 错误页面模块
const errorRouter = [
	{
		isHide: true,
		path: '/403',
		element: lazyLoad(React.lazy(() => import('@/views/error/403'))),
		title: '403页面'
	},
	{
		isHide: true,
		path: '/404',
		element: lazyLoad(React.lazy(() => import('@/views/error/404'))),
		title: '404页面'
	},
	{
		isHide: true,
		path: '/500',
		element: lazyLoad(React.lazy(() => import('@/views/error/500'))),
		title: '500页面'
	}
];

export default errorRouter;
