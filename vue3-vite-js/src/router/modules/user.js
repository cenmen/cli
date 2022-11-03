import Layout from '@/components/Layout.vue';

export default {
	path: '/user',
	redirect: '/user/list',
	component: Layout,
	meta: { title: '用户管理', icon: 'UserOutlined' },
	children: [
		{
			path: '/user/list',
			component: () => import('@/views/User/List.vue'),
			meta: { title: '用户列表' },
		},
		{
			path: '/user/detail',
			component: () => import('@/views/User/Detail.vue'),
			meta: { title: '用户详情' },
		},
	],
};
