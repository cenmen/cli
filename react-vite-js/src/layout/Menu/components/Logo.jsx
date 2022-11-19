import { connect } from 'react-redux';
import logo from '@/assets/images/logo.png';

const Logo = props => {
	return (
		<div className='flex justify-center items-center h-14'>
			<img src={logo} alt='logo' className='w-7 m-0' />
			{!props.isCollapse ? <span className=' ml-2 text-2xl font-black text-gray-300'>I&apos;m Logo</span> : null}
		</div>
	);
};

const mapStateToProps = state => state.layout;
export default connect(mapStateToProps)(Logo);
