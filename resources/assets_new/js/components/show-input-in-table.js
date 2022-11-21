$('.btn-add').on('click', function () {
	const items = handleItem($(this));
	$(this).parents().find('.session-error').addClass('d-none');
	handleEventClickAdd(items);
});

$('.btn-cancel').on('click', function () {
	$(this).parents().find('.validation-error').addClass('d-none');
	const items = handleItem($(this));
	handleEventClickCancel(items);
});

function handleItem(item) {
	const title = item.attr('id').split('-').pop();
	const btnAdd = '#btn-add-' + title;
	const btnSave = '#btn-save-' + title;
	const btnCancel = '#btn-cancel-' + title;

	return {
		add: btnAdd,
		save: btnSave,
		cancel: btnCancel,
		title,
		item,
	};
}

function handleEventClickAdd(items) {
	$(items.add).addClass('d-none');
	$(items.save).removeClass('d-none');
	$(items.cancel).removeClass('d-none');

	const formClass = $(items.item.parent()).attr('data-form');
	const form = $('.' + formClass);

	form.find('.tr-input').removeClass('d-none').find('input').focus();
}

function handleEventClickCancel(items) {
	$(items.cancel).addClass('d-none');
	$(items.save).addClass('d-none');
	$(items.add).removeClass('d-none');

	let formClass = $(items.item.parent()).attr('data-form');
	let form = $('.' + formClass);

	form.find('.tr-input').addClass('d-none').find('input').focus();
}
