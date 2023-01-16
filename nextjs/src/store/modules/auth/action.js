import { ACTION_TYPES } from '@/store/types';

export const setAuthInfo = authInfo => ({ type: ACTION_TYPES.UPDATE_AUTH_INFO, payload: { authInfo } });
