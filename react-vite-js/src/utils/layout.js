/**
 * @description 根据权限配置过滤路由
 * @param {object} authInfo 权限配置
 * @param {Array<RouterObject>} routes 路由配置
 * @returns Array<RouterObject>
 */
export const getFilterRoutersByAuth = (authInfo, routes) => {
	const { path } = authInfo;
	return routes.reduce((total, cur) => {
		if (cur.children) {
			cur.children = getFilterRoutersByAuth(authInfo, cur.children);
		}
		return path.includes(cur.path) ? [...total, cur] : total;
	}, []);
};

/**
 * @description 根据路由数组配置转换左侧菜单栏
 * @param {Array<RouterObject>} routes 路由数组
 * @returns array
 */
export const getAllMenuList = routes => {
	let menus = routes.filter(val => !val.isHide);
	return menus.map(item => {
		const { path, title, icon } = item;
		if (item.children) {
			item.children = getAllMenuList(item.children);
		}
		return { label: title, icon, path, key: path, children: item.children };
	});
};

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = path => {
	const keys = path.split(/(?=\/)/);
	keys.pop();
	return keys;
};

/**
 * @description 根据路由转换成面包屑对象
 * @param {Array<RouterObject>} routes 路由数组
 * @returns object
 */
export const getAllBreadcrumdList = (routes, parentTitle) => {
	return routes.reduce((total, cur) => {
		const { path, title = '', children } = cur;
		const replaceTitle = parentTitle ? `${parentTitle}/${title}` : title;
		if (children) {
			const childs = getAllBreadcrumdList(children, replaceTitle);
			return { ...total, [path]: replaceTitle, ...childs };
		}
		return { ...total, [path]: replaceTitle };
	}, {});
};
