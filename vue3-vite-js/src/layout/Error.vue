<template>
	<div class="card-container p-4 flex flex-col items-center">
		<img class="w-2/4 max-w-2xl" :src="errorImage" alt="error" />
		<span class="text-lg font-bold mt-1.5">页面遇到错误~</span>
		<router-link class="mt-1.5" to="/home">返回首页</router-link>
	</div>
</template>

<script setup>
import errorImage from '@/assets/images/error.svg';
</script>
