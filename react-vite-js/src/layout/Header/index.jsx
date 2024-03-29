import { Layout } from 'antd';
import AvatarIcon from './components/AvatarIcon';
import CollapseIcon from './components/CollapseIcon';
import BreadcrumbNav from './components/BreadcrumbNav';

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<Header>
			<div className='flex items-center'>
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className='flex items-center'>
				<span className='mr-5 text-sm'>Hooks</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
