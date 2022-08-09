import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { VIEW_WELCOME } from '@/constants/modules/route';
import './index.less';

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(VIEW_WELCOME);
	};
	return (
		<Result
			status='404'
			title='404'
			subTitle='Sorry, the page you visited does not exist.'
			extra={<Button onClick={goHome}>返回</Button>}
		/>
	);
};

export default NotFound;
