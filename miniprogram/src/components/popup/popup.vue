<template>
	<view v-if="visible" :class="popupContainerClass" @tap="handleTapMask">
		<view :class="containerClass" @tap="handleTapContent">
			<view :class="styles['header-container']">
				<view v-if="!isExistHeaderSlot && mode === 'confirm'" :class="styles['confirm-header']">
					<text :class="styles['cancel-btn']" @tap="handleCancel">{{ cancelText }}</text>
					<text v-if="title">{{ title }}</text>
					<text :class="styles['confirm-btn']" @tap="handleConfirm">{{ confirmText }}</text>
				</view>
				<view v-if="!isExistHeaderSlot && mode === 'close'" :class="styles['close-header']">
					<text v-if="title" :class="styles['close-title']">{{ title }}</text>
					<image :class="styles['close-btn']" :src="closeIcon" mode="aspectFit" @tap="handleCancel" />
				</view>
				<slot name="header"></slot>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
import { toRefs, onMounted, computed, reactive, useSlots } from 'vue';
import closeIcon from '@/assets/modules/icons/popup-close-icon.png';
import styles from './popup.module.less';

export default {
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		mode: {
			type: String,
			default: 'close',
		},
		title: {
			type: String,
			default: '',
		},
		cancelText: {
			type: String,
			default: '取消',
		},
		confirmText: {
			type: String,
			default: '确定',
		},
	},

	emits: ['cancel', 'confirm'],

	setup(props, context) {
		const state = reactive({
			isExistHeaderSlot: false,
		});

		const popupContainerClass = computed(() => ({
			[styles['popup-container']]: true,
			[styles['animate__animated']]: true,
			[styles['animate__fadeIn']]: true,
		}));

		const containerClass = computed(() => ({
			[styles['container']]: true,
			[styles['animate__animated']]: true,
			[styles['animate__bounceInUp']]: true,
		}));

		const handleCancel = async () => {
			context.emit('cancel');
		};

		const handleConfirm = () => context.emit('confirm');

		const handleTapContent = e => e.stopPropagation();

		const handleTapMask = () => context.emit('cancel');

		onMounted(() => {
			const { header: isExistHeaderSlot } = useSlots();
			if (isExistHeaderSlot) state.isExistHeaderSlot = true;
		});

		return {
			styles,
			closeIcon,
			popupContainerClass,
			containerClass,
			...toRefs(state),
			handleCancel,
			handleConfirm,
			handleTapContent,
			handleTapMask,
		};
	},
};
</script>
