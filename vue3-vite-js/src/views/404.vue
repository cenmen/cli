<template>
	<a-result status="404" title="404" sub-title="页面不存在~">
		<template #extra>
			<a-button @click="goHome">返回</a-button>
		</template>
	</a-result>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
	router.push({ path: '/' });
};
</script>
