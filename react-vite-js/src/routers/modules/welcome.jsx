import LayoutIndex from '@/components/Layout';
import Welcome from '@/views/welcome';
import { VIEW_WELCOME } from '@/constants/modules/route';

// 首页模块
const welcomeRouter = [
	{
		isHide: true,
		path: VIEW_WELCOME,
		element: (
			<LayoutIndex>
				<Welcome />
			</LayoutIndex>
		)
	}
];

export default welcomeRouter;
