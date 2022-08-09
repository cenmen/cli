import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';
import { VIEW_404 } from '@/constants/modules/route';

// 错误页面模块
const errorRouter = [
	{
		isHide: true,
		path: VIEW_404,
		element: lazyLoad(React.lazy(() => import('@/views/Error/404'))),
		title: '404页面'
	}
];

export default errorRouter;
