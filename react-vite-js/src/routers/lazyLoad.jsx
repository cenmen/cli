import { Component, Suspense } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { VIEW_HOME } from '@/constants';
import errorImage from '@/assets/images/error.svg';

const ErrorContainer = () => {
	return (
		<div className='card-container p-4 flex flex-col items-center'>
			<img className='w-2/4 max-w-2xl' src={errorImage} alt='error' />
			<span className='text-lg font-bold mt-1.5'>系统遇到意外错误 ~</span>
			<Link className='mt-1.5' to={VIEW_HOME}>
				返回
			</Link>
		</div>
	);
};

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, errorUrl: '' };
	}

	componentDidMount() {
		this.setState({ hasError: false });
	}

	componentDidCatch() {
		const currentUrl = window.location.href;
		this.setState({ hasError: true, errorUrl: currentUrl });
	}

	componentDidUpdate() {
		// 点击其他页面应退出 500
		const currentUrl = window.location.href;
		const { hasError, errorUrl } = this.state;
		if (hasError && currentUrl !== errorUrl) this.setState({ hasError: false, currentUrl: '' });
	}

	render() {
		if (this.state.hasError) {
			return <ErrorContainer />;
		}
		return this.props.children;
	}
}

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = Comp => {
	const Loading = <Spin className='w-full' size='large' style={{ margin: '150px auto' }} />;
	return (
		<Suspense fallback={Loading}>
			<ErrorBoundary>
				<Comp />
			</ErrorBoundary>
		</Suspense>
	);
};

export default lazyLoad;
