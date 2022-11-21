$('.btn-clear-form').click(function () {
	const searchForm = $(this).closest('.search-form');
	searchForm
		.find('input')
		.not(':button, :submit, :reset, :hidden')
		.val('')
		.removeAttr('checked')
		.removeAttr('selected');
	searchForm.find('select.select-search').val('').trigger('change');
});
