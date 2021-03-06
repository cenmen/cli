import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { updateCollapse } from '@/redux/modules/layout/action';
import LayoutMenu from '../Menu';
import LayoutHeader from '../Header';
import './index.less';
const { Sider, Content } = Layout;

const LayoutIndex = props => {
	// 监听窗口大小变化
	const listeningWindowResize = () => {
		window.addEventListener('resize', () => {
			let screenWidth = document.body.clientWidth;
			if (props.isCollapse === false && screenWidth < 1200) props.updateCollapse(true);
			if (props.isCollapse === false && screenWidth > 1200) props.updateCollapse(false);
		});
	};

	useEffect(() => {
		listeningWindowResize();
	}, []);

	return (
		<section className="container">
			<Sider trigger={null} collapsed={props.isCollapse} width={220} theme="dark">
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<Content>
					<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};

const mapStateToProps = state => state.layout;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
