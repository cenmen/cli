import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    siderCollapsed: false,
  }),
  persist: {
    storage: persistedState.localStorage,
    paths: ['siderCollapsed'],
  },
});
