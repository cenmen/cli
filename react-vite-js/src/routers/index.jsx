import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '@/views/login/index';
import errorRouter from './modules/error';
import weatherRouter from './modules/weather';
import homeRouter from './modules/home';

export const basicRouters = [...weatherRouter];

export const normalRouters = [
	{
		path: '/',
		element: <Navigate to="/login" />,
		isHide: true
	},
	{
		path: '/login',
		title: '登录页',
		element: <Login />,
		isHide: true
	},
	...homeRouter,
	...errorRouter,
	{
		path: '*',
		element: <Navigate to="/404" />,
		isHide: true
	}
];

export const allRouters = [...normalRouters, ...basicRouters];
