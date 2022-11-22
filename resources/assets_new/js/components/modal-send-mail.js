const errors = $('#errors').val();

if (errors > 0) {
	$(`#${$('.modal').attr('id')}`).modal('show');
}
