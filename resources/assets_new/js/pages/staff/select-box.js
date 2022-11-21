export default () => {
	$(document).on('change', '.select-box.--input-table', function (e) {
		$(this)
			.closest('.form-table__input-wrapper')
			.find('span.select-box-label')
			.text(
				($(this).find('option:selected').val() !== '-1') ?
					$(this).find('option:selected').text() : ''
			);
	});
};
