<template>
	<a-row class="bg-white p-1 border-t border-slate-100" align="middle">
		<a-tag
			v-for="item in tabbarItems"
			:key="item.path"
			class="cursor-default items-center"
			:style="{ display: 'flex' }"
			closable
			:color="item.active ? 'processing' : 'default'"
			@click="onClickTagItem(item)"
			@close="onCloseTagItem(item)"
		>
			{{ item.title }}
		</a-tag>
	</a-row>
</template>

<script>
import { defineComponent, nextTick, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { cloneDeep } from 'lodash-es';
import { useLayoutStore } from '@/store';

export default defineComponent({
	setup() {
		const router = useRouter();
		const currentRoute = useRoute();
		const layoutStore = useLayoutStore();

		const onClickTagItem = ({ path }) => {
			router.push({ path });
		};

		const onCloseTagItem = item => {
			const tabs = cloneDeep(layoutStore.tabbarItems);
			if (item.active) tabs.forEach(tab => delete tab.active);
			const filters = tabs.filter(val => val.path !== item.path);
			// 若关闭当前高亮则跳转到第一个 tab
			if (item.active) {
				filters[0].active = true;
				const shouldPath = filters[0].path;
				router.push({ path: shouldPath });
			}
			nextTick(() => layoutStore.$patch({ tabbarItems: tabs }));
		};

		watch(
			() => currentRoute.fullPath,
			() => {
				// 路由变化更新 tabbar
				const { meta, fullPath } = currentRoute;
				const tabs = cloneDeep(layoutStore.tabbarItems);
				tabs.forEach(tab => delete tab.active);
				let currentItem = tabs.find(val => val.path === fullPath);
				if (!currentItem) {
					currentItem = { path: fullPath, title: meta.title };
					tabs.push(currentItem);
				}
				currentItem.active = true;
				layoutStore.$patch({ tabbarItems: tabs });
			}
		);

		return {
			...storeToRefs(layoutStore),
			onClickTagItem,
			onCloseTagItem,
		};
	},
});
</script>
