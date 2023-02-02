<template>
  <div>
    <Header />
    <NuxtErrorBoundary @error="handleCatchError">
      <template #error="{ error }">
        <div class="card-container">错误组件捕获：{{ error }}</div>
      </template>
      <slot />
    </NuxtErrorBoundary>
    <Footer />
  </div>
</template>

<script setup>
const handleCatchError = error => {};
</script>
