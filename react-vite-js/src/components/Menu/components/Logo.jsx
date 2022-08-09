import logo from '@/assets/images/logo.png';
import { connect } from 'react-redux';

const Logo = props => {
	return (
		<div className='logo-box'>
			<img src={logo} alt='logo' className='logo-img' />
			{!props.isCollapse ? <h2 className='logo-text'>I&apos;m Logo</h2> : null}
		</div>
	);
};

const mapStateToProps = state => state.layout;
export default connect(mapStateToProps)(Logo);
