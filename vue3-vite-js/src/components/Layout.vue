<template>
	<a-layout :style="{ minHeight: '100vh' }">
		<a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
			<div class="flex justify-center items-center py-2.5">
				<img :src="logo" />
				<span v-show="!collapsed" class="text-white text-lg ml-2">模板管理系统</span>
			</div>
			<a-menu :open-keys="openKeys" :selected-keys="selectedKeys" theme="dark" mode="inline" @click="onClickMenuItem">
				<template v-for="item in menus" :key="item.path">
					<a-menu-item v-if="!item.children" :key="item.path">
						<template #icon>
							<component :is="item.icon" />
						</template>
						<span>{{ item.title }}</span>
					</a-menu-item>
					<a-sub-menu v-else :key="item.path">
						<template #icon>
							<component :is="item.icon" />
						</template>
						<template #title>{{ item.title }}</template>
						<a-menu-item v-for="child in item.children" :key="child.path">
							{{ child.title }}
						</a-menu-item>
					</a-sub-menu>
				</template>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header class="flex items-center" :style="{ height: '48px', padding: '0 16px', background: 'white' }">
				<MenuUnfoldOutlined @click="() => (collapsed = !collapsed)" />
			</a-layout-header>
			<a-layout-content class="overflow-hidden">
				<router-view v-slot="{ Component, route }">
					<transition enter-active-class="transition-all duration-700" enter-from-class="opacity-0 -translate-x-16">
						<component :is="Component" :key="route.fullPath" />
					</transition>
				</router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { HomeOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';
import logo from '@/assets/images/logo.svg';
import { menus } from '@/router';

export default defineComponent({
	components: {
		HomeOutlined,
		UserOutlined,
		MenuUnfoldOutlined,
	},

	setup() {
		const state = reactive({
			openKeys: [],
			selectedKeys: ['/'],
			collapsed: false,
		});
		const router = useRouter();
		const currentRoute = useRoute();
		state.selectedKeys = currentRoute.matched.map(val => val.path);
		state.openKeys = state.selectedKeys[0];

		const onClickMenuItem = ({ key, keyPath }) => {
			router.push({ path: key });
			state.selectedKeys = keyPath;
		};

		return {
			logo,
			menus,
			...toRefs(state),
			onClickMenuItem,
		};
	},
});
</script>
