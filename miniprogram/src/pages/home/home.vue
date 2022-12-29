<template>
	<navbar title="首页"></navbar>
	<view :class="styles['home-container']"> 首页🍇🍈🍉🍊 </view>
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import styles from './home.module.less';
</script>
