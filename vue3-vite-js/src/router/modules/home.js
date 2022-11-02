import Layout from '@/components/Layout.vue';

export default {
	title: '首页',
	path: '/',
	redirect: '/home',
	icon: 'HomeOutlined',
	component: Layout,
	children: [
		{
			isHide: true,
			title: '首页',
			name: 'home',
			path: '/home',
			component: () => import('@/views/Home.vue'),
		},
	],
};
