<template>
	<web-view :src="url" @load="handleLoad" @error="handleError" @message="handleMessage" />
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useLoad } from '@tarojs/taro';
import styles from './webview.module.less';

export default {
	setup() {
		const state = reactive({ url: null });

		const handleLoad = e => {
			const data = e.detail;
			console.log('🚀 -> handleMessage -> data', data);
		};

		const handleError = e => {
			const data = e.detail;
			console.log('🚀 -> handleMessage -> data', data);
		};

		const handleMessage = e => {
			const { data } = e.detail;
			console.log('🚀 -> handleMessage -> data', data);
		};

		useLoad(options => {
			const { url } = options;
			state.url = decodeURIComponent(url);
			console.log('🚀 -> setup -> url', state.url);
		});

		return {
			styles,
			...toRefs(state),
			handleLoad,
			handleError,
			handleMessage,
		};
	},
};
</script>
