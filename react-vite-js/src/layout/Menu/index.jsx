import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash-es';
import Logo from './components/Logo';

// 将 router 数据提取菜单
const getMenuItems = routes => {
	let menus = routes.filter(val => !val.isHide);
	return menus.map(item => {
		const { path, title, icon } = item;
		const menuItem = { label: title, icon, path, key: path };
		if (item.children) {
			menuItem.children = getMenuItems(item.children);
		}
		return menuItem;
	});
};

const LayoutMenu = props => {
	const { isCollapse, currentRouter } = props;
	const [selectedKeys, setSelectedKeys] = useState([]);
	const [openKeys, setOpenKeys] = useState([]);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const menuList = getMenuItems(cloneDeep(currentRouter));

	// 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname]);
		if (isCollapse) return setOpenKeys([]);
		const openKeys = pathname.split(/(?=\/)/).reduce((total, cur) => {
			const last = total[total.length - 1] ? total[total.length - 1] : '';
			return [...total, `${last}${cur}`];
		}, []);
		setOpenKeys(openKeys);
	}, [pathname, isCollapse]);

	return (
		<div className='flex flex-col justify-between'>
			<Logo></Logo>
			<Menu
				theme='dark'
				mode='inline'
				triggerSubMenuAction='click'
				items={menuList}
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				onOpenChange={openKeys => setOpenKeys(openKeys)}
				onClick={({ key: path }) => navigate(path)}
			></Menu>
		</div>
	);
};

const mapStateToProps = state => ({ ...state.auth, ...state.layout });
export default connect(mapStateToProps)(LayoutMenu);
