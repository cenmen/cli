import { Breadcrumb } from 'antd';
import { useLocation, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash-es';

const getCurrentPathList = pathname => {
	return pathname.split(/(?=\/)/).reduce((total, cur) => {
		const last = total[total.length - 1] ? total[total.length - 1] : '';
		return [...total, `${last}${cur}`];
	}, []);
};

const findCurrentBreadItem = (pathList, routes) => {
	const paths = cloneDeep(pathList);
	return paths.reduce((total, cur) => {
		const target = routes.find(val => matchPath(cur, val.path));
		if (target) total.push(target);
		paths.shift();
		if (target && target.children && paths.length > 0) {
			const restItems = findCurrentBreadItem(paths, target.children);
			total.push(...restItems);
		}
		return total;
	}, []);
};

const BreadcrumbNav = props => {
	const { currentRouter } = props;
	const { pathname } = useLocation();
	const options = findCurrentBreadItem(getCurrentPathList(pathname), currentRouter);

	return (
		<Breadcrumb>
			{options.map(item => (
				<Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(BreadcrumbNav);
