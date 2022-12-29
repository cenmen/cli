<template>
	<view :class="styles['badge-container']" :style="{ top: `${top}px`, right: `${right}px` }">{{ num }}</view>
</template>

<script>
import { computed } from 'vue';
import styles from './badge.module.less';

export default {
	props: {
		count: {
			type: Number,
			default: 0,
		},
		overflowCount: {
			type: Number,
			default: 99,
		},
		top: {
			type: Number,
			default: 0,
		},
		right: {
			type: Number,
			default: 0,
		},
	},

	setup(props) {
		const num = computed(() => (props.count > props.overflowCount ? `${props.overflowCount}+` : props.count));

		return {
			num,
			styles,
		};
	},
};
</script>
