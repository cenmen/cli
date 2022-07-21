import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_INDEX } from '@/constants/modules/route';
import './index.less';

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_INDEX);
	};
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button onClick={goHome}>返回</Button>}
		/>
	);
};

export default NotFound;
