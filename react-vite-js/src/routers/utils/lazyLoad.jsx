import { Component, Suspense } from 'react';
import { Result, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { VIEW_WELCOME } from '@/constants/modules/route';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidMount() {
		this.setState({ hasError: false });
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Result status='500' title='500' subTitle='系统意外错误 ~' extra={<Link to={VIEW_WELCOME}>返回</Link>} />;
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
	return (
		<Suspense
			fallback={
				<Spin
					size='large'
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%'
					}}
				/>
			}
		>
			<ErrorBoundary>
				<Comp />
			</ErrorBoundary>
		</Suspense>
	);
};

export default lazyLoad;
