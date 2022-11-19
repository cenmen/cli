import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { updateCollapse } from '@/redux/modules/layout/action';

const CollapseIcon = props => {
	const { isCollapse, updateCollapse } = props;
	return (
		<div className='mr-5 cursor-pointer flex' onClick={() => updateCollapse(!isCollapse)}>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

const mapStateToProps = state => state.layout;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon);
