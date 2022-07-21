import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_INDEX } from '@/constants/modules/route';
import './index.less';

const NotAuth = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_INDEX);
	};
	return (
		<Result
			status="403"
			title="403"
			subTitle="Sorry, you are not authorized to access this page."
			extra={<Button onClick={goHome}>返回</Button>}
		/>
	);
};

export default NotAuth;
