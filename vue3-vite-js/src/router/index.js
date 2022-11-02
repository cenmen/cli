import { createRouter, createWebHashHistory } from 'vue-router';
import { pick } from 'lodash-es';
import NotFound from '@/views/404.vue';
import homeRouter from './modules/home';
import userRouter from './modules/user';

const selfRouters = [homeRouter, userRouter];

const routes = [
	...selfRouters,
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});

// 两级菜单
export const menus = selfRouters.reduce((total, cur) => {
	const parent = pick(cur, ['title', 'path', 'icon']);
	const items = cur.children.filter(val => !val.isHide);
	const childs = items.map(item => pick(item, ['title', 'path']));
	if (childs.length > 0) {
		parent.children = childs;
	}
	return [...total, parent];
}, []);
console.log('🚀 ~ menus ~ menus', menus);
