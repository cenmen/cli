import Layout from '@/components/Layout.vue';

export default {
	title: '用户管理',
	path: '/user',
	redirect: '/user/list',
	icon: 'UserOutlined',
	component: Layout,
	children: [
		{
			title: '用户列表',
			path: '/user/list',
			component: () => import('@/views/User/List.vue'),
		},
		{
			title: '用户详情',
			path: '/user/detail',
			component: () => import('@/views/User/Detail.vue'),
		},
	],
};
