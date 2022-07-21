import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const BreadcrumbNav = props => {
	const { pathname } = useLocation();
	const title = props.breadcrumbList[pathname] || '';
	const breadcrumbList = title.split('/');

	return (
		<Breadcrumb>
			{breadcrumbList.map(item => {
				return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
			})}
		</Breadcrumb>
	);
};

const mapStateToProps = state => state.layout;
export default connect(mapStateToProps)(BreadcrumbNav);
