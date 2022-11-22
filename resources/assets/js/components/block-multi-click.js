$('.block-multi-click').on('click', function (e) {
	if (e.detail > 1) {
		$('form').submit(function (e) {
			e.preventDefault();
		});
	}
});
