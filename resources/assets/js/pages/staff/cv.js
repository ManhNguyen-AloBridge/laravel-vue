$('#form-download-cv').on('submit', function () {
	$('#download-cv-modal').modal('hide');
});

$('#is-hidden').on('change', function () {
	toggleChecked($(this));
});

$('#is_hidden_name_download').on('change', function () {
	toggleChecked($(this));
});

function toggleChecked(item) {
	const isChecked = item.attr('checked');

	if (isChecked) {
		item.removeAttr('checked').prop('checked', false);
	} else {
		item.attr('checked', 'checked').prop('checked', true);
	}
}
