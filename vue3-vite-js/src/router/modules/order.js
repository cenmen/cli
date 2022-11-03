import Layout from '@/components/Layout.vue';

export default {
	path: '/order',
	redirect: '/order/list',
	component: Layout,
	meta: { title: '订单管理', icon: 'BarsOutlined' },
	children: [
		{
			path: '/order/list',
			component: () => import('@/views/User/List.vue'),
			meta: { title: '订单列表' },
		},
		{
			path: '/order/list',
			component: () => import('@/views/User/List.vue'),
			meta: { title: '订单列表（隐藏）', isHide: true },
		},
		{
			path: '/order/detail',
			redirect: '/order/detail/1',
			meta: { title: '订单详情' },
			children: [
				{
					path: '/order/detail/1',
					component: () => import('@/views/User/List.vue'),
					meta: { title: '订单详情 - 1' },
				},
				{
					path: '/order/detail/2',
					component: () => import('@/views/User/List.vue'),
					meta: { title: '订单详情 - 2' },
				},
			],
		},
	],
};
