
const formDelete = $('form[modal-id=confirm-delete-user]');
const btnConfirmDelete = $('.btn-confirm-delete');

btnConfirmDelete.on('click', function () {
	const idItem = $(this).attr('id-item');
	const itemParent = $(this).parent().parent();
	const code = $(itemParent.find('p[key-value=code]')[0]).text();

	const messageText = i18next
		.t('pages.invitation-code.confirm_delete_code')
		.replace(':code', code)

	formDelete.find('#msg-confirm-delete').text(messageText);

	formDelete.attr('action', formDelete.attr('action').replace('id', idItem));
});
