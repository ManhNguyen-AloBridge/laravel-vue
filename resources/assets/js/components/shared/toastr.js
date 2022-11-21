$(document).ready(function () {
	const toastrValue = $('#toastr').val();
	const type = $('#toastr').attr('data-type');

	if (!toastrValue || !type) {
		return;
	}

	toastr[type](toastrValue);
});
