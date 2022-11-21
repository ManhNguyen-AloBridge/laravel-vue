export default (callback) => {
	$('.tag__icon-remove').on('click', function () {
		$(this).closest('.tag').remove();
		if (typeof callback === 'function') {
			callback();
		}
	});
};
