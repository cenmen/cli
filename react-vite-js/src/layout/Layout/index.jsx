import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useOutlet, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
import { updateCollapse } from '@/redux/modules/layout/action';
import LayoutMenu from '../Menu';
import LayoutHeader from '../Header';
import LayoutTabbar from '../Tabbar';
import KeepAlive from '../KeepAlive';
const { Sider, Content } = Layout;

const getTargetRouteItem = (pathname, routes) => {
	for (const item of routes) {
		if (item.path === pathname) return item;
		if (item.children) {
			const target = getTargetRouteItem(pathname, item.children);
			if (target) return target;
		}
	}
};

const getKeepAliveItems = routes => {
	return routes.reduce((total, cur) => {
		if (cur.keepAlive) total.push(cur.path);
		if (cur.children) {
			const includes = getKeepAliveItems(cur.children);
			total.push(...includes);
		}
		return total;
	}, []);
};

const Transition = props => {
	const animates = useSpring({ reset: true, to: { opacity: 1, translateX: 0 }, from: { opacity: 0, translateX: -150 } });
	return <animated.div style={animates}>{props.children}</animated.div>;
};

const LayoutIndex = props => {
	const { children, currentRouter, isCollapse, updateCollapse } = props;
	const [includeItems, setIncludeItems] = useState(null);
	const [excludeItems, setExcludeItems] = useState(null);
	const outlet = useOutlet();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	// 监听窗口大小变化
	const listeningWindowResize = () => {
		window.addEventListener('resize', () => {
			let screenWidth = document.body.clientWidth;
			if (isCollapse === false && screenWidth < 1200) updateCollapse(true);
		});
	};

	useEffect(() => {
		listeningWindowResize();
	}, []);

	useEffect(() => {
		if (!currentRouter) return;
		const target = getTargetRouteItem(pathname, currentRouter);
		if (target && target.redirect) navigate(target.redirect);
	}, [pathname, currentRouter]);

	useEffect(() => {
		const includes = getKeepAliveItems(currentRouter);
		setIncludeItems(includes);
	}, [currentRouter]);

	return (
		<Layout className='h-screen'>
			<Sider trigger={null} collapsed={isCollapse} width={220} theme='dark'>
				<LayoutMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<LayoutTabbar />
				<Content>
					<Transition>
						<KeepAlive include={includeItems} exclude={excludeItems}>
							{children ? children : outlet}
						</KeepAlive>
					</Transition>
				</Content>
			</Layout>
		</Layout>
	);
};

const mapStateToProps = state => ({ ...state.auth, ...state.layout });
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
