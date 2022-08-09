import welcome from '@/assets/images/welcome.png';
import './index.less';

const Welcome = () => {
	return (
		<div className='home card-container'>
			<img src={welcome} alt='welcome' />
		</div>
	);
};

export default Welcome;
