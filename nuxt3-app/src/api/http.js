import { useAuthStore } from '@/store';

const onRequest = ({ request, options }) => {
  const authStore = useAuthStore();
  if (!options.headers) options.headers = {};
  options.headers['Authorization'] = `Bearer ${authStore.token}`;
};

export default {
  get: (url, options) => $fetch(url, { method: 'GET', onRequest, ...options }),
  post: (url, options) => $fetch(url, { method: 'POST', onRequest, ...options }),
  put: (url, options) => $fetch(url, { method: 'PUT', onRequest, ...options }),
  patch: (url, options) => $fetch(url, { method: 'PATCH', onRequest, ...options }),
  delete: (url, options) => $fetch(url, { method: 'DELETE', onRequest, ...options }),
};
