export const delay = timeout => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, timeout);
	});
};

export const formatPrice = (price, fixed = 2) => (!price && price !== 0 ? '--' : price.toFixed(fixed));
