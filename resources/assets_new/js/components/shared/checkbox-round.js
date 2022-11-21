$(document).on('click', '.checkbox-round input', function (e) {
	if ($(this).attr('readonly') === 'readonly') {
		e.preventDefault();
		return;
	}
});
