import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { cloneDeep, omit } from 'lodash-es';
import { setAuthInfo, setCurrentRouter } from '@/redux/modules/auth/action';
import { routers } from '@/routers';
import { fetchAuthInfo } from '@/api/modules/auth';

// 默认父级菜单下没有子菜单则过滤掉父菜单
const getAuthRoutes = (authInfo, routes) => {
	return routes.reduce((total, cur) => {
		if (cur.children) cur.children = getAuthRoutes(authInfo, cur.children);
		return !cur.auth || authInfo.includes(cur.auth) ? [...total, cur] : total;
	}, []);
};

// 将当前挂载路由过滤 ReactNode 存储到 redux
const getCurrentRouterTree = routes => {
	return routes.reduce((total, cur) => {
		if (cur.children) cur.children = getCurrentRouterTree(cur.children);
		return [...total, omit(cur, ['element'])];
	}, []);
};

const Router = props => {
	const { setAuthInfo, setCurrentRouter } = props;
	const [authRoutes, setAuthRoutes] = useState(null);

	const loadAuthInfo = async () => {
		const authInfo = await fetchAuthInfo();
		const routes = getAuthRoutes(authInfo, routers);
		const cloneRoutes = cloneDeep(routes);
		const currentRoutes = getCurrentRouterTree(cloneRoutes);
		setAuthRoutes(routes);
		setAuthInfo(authInfo);
		setCurrentRouter(currentRoutes);
	};

	useEffect(() => {
		loadAuthInfo();
	}, []);

	const AuthRouter = props => useRoutes(props.routes);

	return <BrowserRouter>{authRoutes && <AuthRouter routes={authRoutes} />}</BrowserRouter>;
};

const mapStateToProps = state => state.auth;
const mapDispatchToProps = { setAuthInfo, setCurrentRouter };
export default connect(mapStateToProps, mapDispatchToProps)(Router);
