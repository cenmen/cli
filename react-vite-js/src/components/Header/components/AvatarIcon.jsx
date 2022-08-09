import { Avatar, Menu, Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTokenInfo } from '@/redux/modules/auth/action';
import avatar from '@/assets/images/avatar.png';

const AvatarIcon = props => {
	const navigate = useNavigate();
	// 退出登录
	const logout = () => {
		props.setTokenInfo({});
		navigate('/login');
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
		<>
			<Dropdown overlay={menu} placement='bottomRight' arrow>
				<Avatar size='large' src={avatar} />
			</Dropdown>
		</>
	);
};

const mapDispatchToProps = { setTokenInfo };
export default connect(null, mapDispatchToProps)(AvatarIcon);
