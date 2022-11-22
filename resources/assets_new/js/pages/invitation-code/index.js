import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const invitationCodeRepository = getRepository('invitationCode');
const formAdd = $('#form-add');

const formDelete = $('form[modal-id=confirm-delete-invitation-code]');
const btnConfirmDelete = $('.btn-confirm-delete');

$('#btn-close').on('click', function () {
	removeErrors();
});

$(document).on('submit', '#form-add', async function (e) {
	try {
		e.preventDefault();
		removeErrors();

		const data = Object.fromEntries(new FormData(e.target).entries());
		const dataResponse = await invitationCodeRepository.store(data);

		$('#add-invitation-code').modal('toggle');

		setTimeout(() => {
			loading.hide();
			toastr.success(dataResponse.data);
		}, 300);
		location.reload();
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);

		generateValidationError(error.response.data.errors, formAdd);
	}
});

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

function generateValidationError(errors, formItem) {
	const listInputInForm = formItem.find('.form__input');

	listInputInForm.each(function (index, item) {
		const nameField = $(item).attr('name');
		if (errors[nameField]) {
			$(item).after(
				`<p class="validation-error" id="${index}"> ${errors[nameField][0]}</p>`
			);
		}
	});
}

function removeErrors() {
	$('.validation-error').remove();
}
