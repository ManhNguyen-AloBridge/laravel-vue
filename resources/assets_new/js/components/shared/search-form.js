$('.search-form__btn-clear').click(function () {
	const searchForm = $(this).closest('.search-form');
	searchForm
		.find('input')
		.not(':button, :submit, :reset, :hidden')
		.val('')
		.removeAttr('checked')
		.removeAttr('selected');
	searchForm.find('select').val(null).trigger('change');
	searchForm.find('select.select-search').val('').trigger('change');
});

$('.search-form__toggle-input').click(function () {

	const searchForm = $(this).closest('.search-form');
	searchForm.find('.search-form__body').slideToggle();
	$('.search-form__toggle-icon').toggleClass('--open');
});
