// 点击组件外区域
export const onClickOutside = {
	// 初始化指令
	mounted(el, binding) {
		const clickHandler = e => {
			if (el.contains(e.target)) return false;
			if (binding.value) binding.value(e);
		};
		el.__vueClickOutside__ = clickHandler;
		document.addEventListener('click', clickHandler);
	},
	unmounted(el) {
		// 解除事件监听
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	},
};
