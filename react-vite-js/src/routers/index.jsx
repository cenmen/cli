import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '@/views/Login/index';
import { VIEW_LOGIN, VIEW_404 } from '@/constants/modules/route';
import errorRouter from './modules/error';
import weatherRouter from './modules/weather';
import welcomeRouter from './modules/welcome';

export const basicRouters = [...weatherRouter];

export const normalRouters = [
	{
		path: '/',
		element: <Navigate to='/login' />,
		isHide: true
	},
	{
		path: VIEW_LOGIN,
		title: '登录页',
		element: <Login />,
		isHide: true
	},
	...welcomeRouter,
	...errorRouter,
	{
		path: '*',
		element: <Navigate to={VIEW_404} />,
		isHide: true
	}
];

export const allRouters = [...normalRouters, ...basicRouters];
