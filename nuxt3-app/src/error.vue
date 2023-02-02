<template>
  <div class="card-container">
    <n-space align="center">
      <n-button @click="handleError">清除错误</n-button>
      <n-tag type="error">{{ props.error.statusCode }}</n-tag>
      <n-tag type="error">{{ props.error.statusMessage }}</n-tag>
    </n-space>
  </div>
</template>

<script setup>
import { NButton, NSpace, NTag } from 'naive-ui';
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>
