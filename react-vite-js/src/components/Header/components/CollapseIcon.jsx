import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { updateCollapse } from '@/redux/modules/layout/action';

const CollapseIcon = props => {
	return (
		<div
			className='collapsed'
			onClick={() => {
				props.updateCollapse(!props.isCollapse);
			}}
		>
			{props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

const mapStateToProps = state => state.layout;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
