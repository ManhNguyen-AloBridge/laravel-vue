$('.select-checkbox').on('click', function (e) {
	$(this).find('.select-checkbox__list').show();
});

$('.select-checkbox__item input[type=checkbox]').on('click', function (e) {
	const checked = $(this).prop('checked');
	$(this)
		.closest('.select-checkbox__item')
		.toggleClass('--selected', checked);
});

$('.select-checkbox__item input[data-select="all"]').on('click', function (e) {
	const checked = $(this).prop('checked');
	$(this).closest('.select-checkbox').find('input').prop('checked', checked);
	$(this)
		.closest('.select-checkbox')
		.find('li')
		.removeClass('--selected')
		.toggleClass('--selected', checked);
});

$(document).on('click', function (e) {
	const selectCheckboxElement = e.target.closest('.select-checkbox');
	if (!selectCheckboxElement) {
		$('.select-checkbox__list').hide();
	}
});
