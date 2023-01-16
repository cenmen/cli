import { ACTION_TYPES } from '@/store/types';
import { delay } from '@/utils';

export const setCount = count => ({ type: ACTION_TYPES.UPDATE_COUNT, payload: { count } });

export const setCountByAsync = count => dispatch => {
	delay(1500).then(() => {
		dispatch(setCount(count));
	});
};
