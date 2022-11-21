$('.datatable').on('click', '.btn-delete', function () {
	const objData = JSON.parse($(this).attr('item-data'));
	const formAttr = $(this).attr('data-from');
	const routeDestroy = $(this).attr('route-handle');
	$(`.content-modal`).remove();

	$(`#${formAttr}`).attr('action', routeDestroy);
	contentModal = i18next
		.t('common.delete_setting')
		.replace(':name', objData['name']);
	$;
	$(`#content-modal-${formAttr}`).append(
		`<p class="content-modal">${contentModal}</p>`
	);
});
