<template>
	<a-layout :style="{ minHeight: '100vh' }">
		<a-layout-sider :collapsed="siderCollapsed" :trigger="null" collapsible>
			<div class="flex justify-center items-center p-2.5">
				<img class="w-6" :src="logo" />
				<span v-show="!siderCollapsed" class="text-gray-300 text-base font-medium truncate ml-2">模板管理系统</span>
			</div>
			<Sider />
		</a-layout-sider>
		<a-layout>
			<LayoutHeader />
			<Tabbar />
			<a-layout-content class="overflow-hidden">
				<router-view v-slot="{ Component, route }">
					<transition enter-active-class="transition-all duration-1000" enter-from-class="opacity-0 -translate-x-16">
						<keep-alive>
							<component :is="Component" :key="route.fullPath" />
						</keep-alive>
					</transition>
				</router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from '@/store';
import { menus } from '@/router';
import logo from '@/assets/images/logo.svg';
import Header from './Header.vue';
import Sider from './Sider.vue';
import Tabbar from './Tabbar.vue';

export default defineComponent({
	components: {
		Sider,
		Tabbar,
		LayoutHeader: Header,
	},

	setup() {
		const layoutStore = useLayoutStore();

		const onChangeCollapsed = () => {
			layoutStore.$patch({ siderCollapsed: !layoutStore.siderCollapsed });
		};

		return {
			logo,
			menus,
			...storeToRefs(layoutStore),
			onChangeCollapsed,
		};
	},
});
</script>
