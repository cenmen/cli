<template>
	<a-menu :open-keys="openKeys" :selected-keys="selectedKeys" theme="dark" mode="inline" @click="onClickMenuItem">
		<template v-for="menuItem in menus" :key="menuItem.path">
			<a-menu-item v-if="!menuItem.children" :key="menuItem.path">
				<template #icon>
					<component :is="menuItem.icon" />
				</template>
				<span>{{ menuItem.title }}</span>
			</a-menu-item>
			<a-sub-menu v-else :key="menuItem.path" @click="onClickSubMenu(menuItem)">
				<template #icon>
					<component :is="menuItem.icon" />
				</template>
				<template #title>{{ menuItem.title }}</template>
				<template v-for="subMenuItem in menuItem.children" :key="subMenuItem.path">
					<a-menu-item v-if="!subMenuItem.children" :key="subMenuItem.path">
						<span>{{ subMenuItem.title }}</span>
					</a-menu-item>
					<a-sub-menu v-else :key="subMenuItem.path" @click.stop="onClickSecondSubMenu(subMenuItem)">
						<template #title>{{ subMenuItem.title }}</template>
						<a-menu-item v-for="child in subMenuItem.children" :key="child.path">
							{{ child.title }}
						</a-menu-item>
					</a-sub-menu>
				</template>
			</a-sub-menu>
		</template>
	</a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { HomeOutlined, UserOutlined, BarsOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';
import { menus } from '@/router';

export default defineComponent({
	components: {
		HomeOutlined,
		UserOutlined,
		BarsOutlined,
	},

	setup() {
		const state = reactive({
			openKeys: [],
			selectedKeys: ['/'],
		});
		const router = useRouter();
		const currentRoute = useRoute();
		state.selectedKeys = currentRoute.matched.map(val => val.path);
		state.openKeys = state.selectedKeys.slice(0, -1);

		const onClickMenuItem = ({ key, keyPath }) => {
			state.selectedKeys = keyPath;
			router.push({ path: key });
		};

		const onClickSubMenu = ({ path }) => {
			state.openKeys = [path];
		};

		const onClickSecondSubMenu = ({ path }) => {
			state.openKeys.push(path);
		};

		watch(
			() => currentRoute.fullPath,
			() => {
				state.selectedKeys = currentRoute.matched.map(val => val.path);
				state.openKeys = state.selectedKeys.slice(0, -1);
			}
		);

		return {
			menus,
			...toRefs(state),
			onClickMenuItem,
			onClickSubMenu,
			onClickSecondSubMenu,
		};
	},
});
</script>
