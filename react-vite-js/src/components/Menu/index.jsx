import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { getOpenKeys } from '@/utils';
import { setMenuList } from '@/redux/modules/layout/action';
import { setBreadcrumbList } from '@/redux/modules/layout/action';
import Logo from './components/Logo';
import './index.less';

const LayoutMenu = props => {
	const { menuList } = props;
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [selectedKeys, setSelectedKeys] = useState([pathname]);
	const [openKeys, setOpenKeys] = useState([]);

	// 设置当前展开的 subMenu
	const onOpenChange = openKeys => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};

	// 点击当前菜单跳转页面
	const clickMenu = ({ key: path }) => {
		navigate(path);
	};

	// 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname]);
		props.isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [pathname, props.isCollapse]);

	return (
		<div className="menu">
			<Logo></Logo>
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				items={menuList}
				onClick={clickMenu}
				onOpenChange={onOpenChange}
			></Menu>
		</div>
	);
};

const mapStateToProps = state => state.layout;
const mapDispatchToProps = { setMenuList, setBreadcrumbList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
