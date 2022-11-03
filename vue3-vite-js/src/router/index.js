import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/404.vue';
import homeRouter from './modules/home';
import userRouter from './modules/user';
import orderRouter from './modules/order';

/**
 * @description 路由配置项 meta 参数
 * @param {Boolean} isHide 是否在左侧菜单栏
 * @param {String} icon 左侧菜单栏首级图标
 * @param {String} title 左侧菜单栏和 tabbar 名称
 */

const selfRouters = [homeRouter, userRouter, orderRouter];

const routes = [
	...selfRouters,
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

// let isInitRouter = false;
// router.beforeEach(to => {
// 	if (!isInitRouter) {
// 		// router.addRoute(generateRoute(to));
// 		isInitRouter = true;
// 		// 触发重定向
// 		return to.fullPath;
// 	}
// });

// 二三级菜单
export const menus = selfRouters.reduce((total, cur) => {
	const parent = { path: cur.path, ...cur.meta };
	const items = cur.children.filter(val => val.meta && !val.meta.isHide);
	const childs = items.map(item => {
		const current = { path: item.path, ...item.meta };
		if (item.children) current.children = item.children.map(val => ({ path: val.path, ...val.meta }));
		return current;
	});
	if (childs.length > 0) {
		parent.children = childs;
	}
	return [...total, parent];
}, []);
console.log('🚀 ~ menus ~ menus', menus);
