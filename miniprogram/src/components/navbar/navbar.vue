<template>
	<view :class="styles['navbar-placeholder']" :style="{ height: `${navbarHeight}px` }">
		<view id="navbar" :class="styles['navbar-container']" :style="{ paddingTop: `${distanceTop}px` }">
			<view v-if="!isExistDefaultSlot" :class="styles['default-navbar']">
				<image :class="styles['back-icon']" src="@/assets/modules/icons/navbar-back-icon.png" @tap="handleTapBack" />
				<text :class="styles['title']">{{ title }}</text>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
import Taro from '@tarojs/taro';
import { toRefs, onMounted, reactive, useSlots, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSelectorClientRect } from '@/hooks';
import { useAuthStore } from '@/stores';
import { navigateBack } from '@/router';
import styles from './navbar.module.less';

export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		isShowBack: {
			type: Boolean,
			default: true,
		},
	},

	setup() {
		const state = reactive({
			distanceTop: 0,
			isExistDefaultSlot: false,
		});
		const authStore = useAuthStore();
		const navbarSelector = useSelectorClientRect('#navbar');
		const navbarHeight = computed(() => navbarSelector?.value?.height || 0);

		const handleTapBack = () => {
			navigateBack(1);
		};

		onMounted(() => {
			const { top } = Taro.getMenuButtonBoundingClientRect();
			const isExistDefaultSlot = useSlots().default;
			state.distanceTop = top;
			if (isExistDefaultSlot) state.isExistDefaultSlot = true;
		});

		return {
			styles,
			navbarHeight,
			...toRefs(state),
			...storeToRefs(authStore),
			handleTapBack,
		};
	},
};
</script>
