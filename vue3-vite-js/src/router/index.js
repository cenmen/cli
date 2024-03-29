import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/404.vue';
import homeRouter from './modules/home';
import userRouter from './modules/user';
import orderRouter from './modules/order';

/**
 * @description 路由配置项 meta 参数
 * @param {Boolean} isHide 是否在左侧菜单栏隐藏
 * @param {String} icon 左侧菜单栏首级图标名称（在 Sider.vue 引入同名组件）
 * @param {String} title 左侧菜单栏和 tabbar 名称
 * @param {Boolean} noTabbar 不添加到 tabbar
 * @param {Boolean} root 是否模块根
 */

export const selfRouters = [userRouter, orderRouter];

const routes = [
	homeRouter,
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
		meta: { isHide: true, root: true },
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});
