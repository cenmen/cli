import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		authInfo: {},
		userInfo: {},
		token: '123',
	}),
	persist: {
		paths: ['authInfo', 'userInfo', 'token'],
	},
});
