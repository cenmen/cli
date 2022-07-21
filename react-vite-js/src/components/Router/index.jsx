import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { setAuthInfoActionThunk, setAuthInfo } from '@/redux/modules/auth/action';
import { setMenuList, setBreadcrumbList } from '@/redux/modules/layout/action';
import { normalRouters, basicRouters } from '@/routers/index';
import { getAuthInfo } from '@/api/modules/login';
import * as utils from '@/utils';

const Router = props => {
	console.log('==> [loadAuthInfo]', props);
	const [authRoutes, setAuthRoutes] = useState(null);

	const loadAuthInfo = async () => {
		const authInfo = await getAuthInfo();
		console.log('==> [authInfo]', authInfo);
		// await props.setAuthInfoActionThunk();
		const routes = utils.getFilterRoutersByAuth(authInfo, basicRouters);
		const authRoutes = [...normalRouters, ...routes];
		const menuList = utils.getAllMenuList(cloneDeep(authRoutes));
		const breadcrumdList = utils.getAllBreadcrumdList(cloneDeep(authRoutes));
		console.log('==> [authRoutes]', authRoutes);
		console.log('==> [menuList]', menuList);
		console.log('==> [breadcrumdList]', breadcrumdList);
		setAuthRoutes(authRoutes);
		props.setAuthInfo(authInfo);
		props.setMenuList(menuList);
		props.setBreadcrumbList(breadcrumdList);
	};

	useEffect(() => {
		loadAuthInfo();
	}, []);

	const AuthRouter = props => {
		const routes = useRoutes(props.routes);
		return routes;
	};

	return <HashRouter>{authRoutes && <AuthRouter routes={authRoutes} />}</HashRouter>;
};
const mapStateToProps = state => state.auth;
const mapDispatchToProps = { setAuthInfoActionThunk, setAuthInfo, setMenuList, setBreadcrumbList };
export default connect(mapStateToProps, mapDispatchToProps)(Router);
