import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const BreadcrumbNav = props => {
	const { breadcrumbList } = props;
	const { pathname } = useLocation();

	// 路由无参准确匹配
	const exact = path => {
		return path in breadcrumbList ? breadcrumbList[path] : null;
	};

	// 路由含参模糊匹配
	const approximate = path => {
		const fuzzys = Object.keys(breadcrumbList).filter(val => val.includes(':'));
		const patterns = fuzzys.map(val => val.replaceAll(/(:.*?(?=\/))|(:.*)|(\*)/g, '.*'));
		console.log('🚀 ~ patterns', patterns);
		const index = patterns.findIndex(val => new RegExp(val).test(path));
		const target = fuzzys[index];
		return breadcrumbList[target];
	};

	// 匹配父路由
	const parent = path => {
		const paths = path.split(/(?=\/)/);
		const key = paths.reduce((total, cur) => {
			const currentKey = total + cur;
			return currentKey in breadcrumbList ? currentKey : total;
		}, '');
		return breadcrumbList[key];
	};

	const title = exact(pathname) || approximate(pathname) || parent(pathname) || '';
	const options = title.split('/');

	return (
		<Breadcrumb>
			{options.map(item => {
				return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
			})}
		</Breadcrumb>
	);
};

const mapStateToProps = state => state.layout;
export default connect(mapStateToProps)(BreadcrumbNav);
