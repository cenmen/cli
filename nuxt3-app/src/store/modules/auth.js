import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    authInfo: {},
    userInfo: {},
    token: '',
  }),
  persist: {
    storage: persistedState.localStorage,
    paths: ['authInfo', 'userInfo', 'token'],
  },
});
