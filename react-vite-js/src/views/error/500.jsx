import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HOME_INDEX } from '@/constants/modules/route';
import './index.less';

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_INDEX);
	};
	return (
		<Result status="500" title="500" subTitle="Sorry, something went wrong." extra={<Button onClick={goHome}>返回</Button>} />
	);
};

export default NotNetwork;
