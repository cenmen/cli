<template>
	<view v-if="visible" :class="{ [styles['modal-container']]: true }" @tap="handleTapMask">
		<view :class="{ [styles['animate__animated']]: true, [styles['animate__backInUp']]: visible }">
			<view v-if="!isExistDefaultSlot" :class="styles['container']">
				<view :class="styles['header']">{{ title }}</view>
				<view :class="styles['content']"><slot name="content"></slot></view>
				<view :class="styles['footer-container']">
					<view v-if="!isExistFooterSlot" :class="styles['footer']">
						<button v-if="cancelText" :class="styles['cancel-btn']" @tap="handleCancel">{{ cancelText }}</button>
						<button v-if="confirmText" :class="styles['confirm-btn']" @tap="handleConfirm($event)">{{ confirmText }}</button>
					</view>
					<slot name="footer"></slot>
				</view>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
import { toRefs, onMounted, reactive, useSlots } from 'vue';
import styles from './modal.module.less';

export default {
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		cancelText: {
			type: String,
			default: '',
		},
		confirmText: {
			type: String,
			default: '',
		},
	},

	emits: ['mask', 'cancel', 'confirm'],

	setup(props, context) {
		const state = reactive({
			isExistDefaultSlot: false,
			isExistFooterSlot: false,
		});

		const handleTapMask = () => context.emit('mask');

		const handleCancel = () => context.emit('cancel');

		const handleConfirm = e => {
			e.stopPropagation();
			context.emit('confirm');
		};

		onMounted(() => {
			const { default: isExistDefaultSlot, footer: isExistFooterSlot } = useSlots();
			if (isExistDefaultSlot) state.isExistDefaultSlot = true;
			if (isExistFooterSlot) state.isExistFooterSlot = true;
		});

		return {
			styles,
			...toRefs(state),
			handleTapMask,
			handleCancel,
			handleConfirm,
		};
	},
};
</script>
