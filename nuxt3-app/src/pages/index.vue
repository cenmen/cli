<template>
  <NuxtLayout name="content">
    <div class="mt-2 p-2">
      <n-space>
        <n-button @click="handleCreateError">测试错误捕获</n-button>
        <n-button @click="handleTestLodash">测试 Lodash</n-button>
        <n-button @click="handleChangeToken"> 测试 pinia {{ authStore.token || '--' }} </n-button>
        <n-button @click="execute">客户端请求</n-button>
      </n-space>
      <section class="mt-2">服务端渲染请求数据：{{ industryDesc }}</section>
      <section class="mt-2">客户端渲染请求数据：{{ helloText }}</section>
      <section class="mt-2">错误渲染数据：{{ error.text }}</section>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  layout: false,
};
</script>

<script setup>
import { computed } from 'vue';
import { NButton, NSpace } from 'naive-ui';
import { fetchCailianshePlateData, fetchHelloData } from '@/api';
import { useAuthStore } from '@/store';

useServerSeoMeta({
  ogTitle: '首页 useServerSeoMeta - ogTitle',
});

const error = ref({ text: 'init' });

const { data: plateData } = useAsyncData('cailianshe', () =>
  fetchCailianshePlateData({
    app: 'CailianpressWeb',
    os: 'web',
    secu_code: 'cls80457',
    sv: '7.7.5',
    sign: '7095db567233600d2d24ba74dbeb6afc',
  })
);
const industryDesc = computed(() => plateData?.value?.data?.desc || '--');

const { data: helloText, execute } = useAsyncData('hello', () => fetchHelloData(), { server: false, immediate: false });

const authStore = useAuthStore();

const handleCreateError = () => {
  console.log('🚀 -> handleError -> handleError');
  null.forEach(val => val);
  // throw createError({ fatal: true });
};

const handleChangeToken = () => {
  authStore.$patch({ token: Math.random() });
};

const handleTestLodash = () => {
  console.log('🚀 -> handleTestLodash -> handleTestLodash', _camelCase('__FOO_BAR__'));
};
</script>
