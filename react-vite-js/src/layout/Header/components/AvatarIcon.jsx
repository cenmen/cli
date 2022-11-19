import { Avatar, Menu, Dropdown, message } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTokenInfo } from '@/redux/modules/auth/action';

const AvatarIcon = props => {
	const navigate = useNavigate();
	// 退出登录
	const logout = () => {
		setTimeout(() => {
			props.setTokenInfo({});
		}, 0);
		message.success('已退出登录');
		// navigate('/login');
	};

	const menuList = [
		{
			key: 'logout',
			label: <span className='dropdown-item'>退出登录</span>,
			icon: <LogoutOutlined />,
			onClick: logout
		}
	];

	const menu = <Menu items={menuList}></Menu>;

	return (
		<Dropdown overlay={menu} placement='bottomRight' arrow>
			<Avatar size='large' src='https://joeschmoe.io/api/v1/random' />
		</Dropdown>
	);
};

const mapDispatchToProps = { setTokenInfo };
export default connect(null, mapDispatchToProps)(AvatarIcon);
