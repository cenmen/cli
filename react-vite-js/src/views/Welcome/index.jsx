import welcome from '@/assets/images/welcome.png';

const Welcome = () => {
	return (
		<div className='h-full card-container'>
			<img src={welcome} alt='welcome' />
		</div>
	);
};

export default Welcome;
