import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const notificationRepository = getRepository('notification');

$('#btn-edit').on('click', function () {
	$('.form__input').removeClass('d-none');
	$('.checkbox__input').removeAttr('disabled');
	$('.tag__icon-remove').removeClass('u-pointer-events-none');
	$('#btn-submit').removeClass('d-none');
	$('btn-back').removeClass('d-none');
	$('.search-staff-name').removeClass('d-none');
	$('.modal-body p').addClass('d-none');
	$('.btn-back').removeClass('d-none');
	$('#btn-edit').addClass('d-none');
	$('.tag__icon-remove').removeAttr('hidden');
});

$('.btn-back').on('click', async function () {
	$('.form__input').addClass('d-none');
	$('.checkbox__input').attr('disabled', 'disabled');
	$('.tag__icon-remove').addClass('u-pointer-events-none');
	$('#btn-submit').addClass('d-none');
	$('btn-back').addClass('d-none');
	$('.search-staff-name').addClass('d-none');
	$('.modal-body p').removeClass('d-none');
	$('.btn-back').addClass('d-none');
	$('#btn-edit').removeClass('d-none');
	$('.tag__icon-remove').attr('hidden', true);
	removeErrors();

	const dataResponse = await notificationRepository.detail(
		$('#id-notification').val()
	);
	$('.tag').remove();
	const objectNotification = dataResponse.data.data;
	for (const property in objectNotification) {
		if (property == 'noti_to') {
			if (
				objectNotification[property] == i18next.t('notiToCompany.all')
			) {
				$('input[name="noti_to"]').prop('checked', true);
			} else {
				$('input[name="noti_to"]').prop('checked', false);
			}
		}
		if (property == 'level') {
			$(`option[value="${objectNotification[property]}"]`).attr(
				'selected',
				'selected'
			);
		}
		if (property == 'companies') {
			objectNotification[property].forEach((element) => {
				$(`
				<div class="tag">
					<span class="">
						${element.name}
					</span>
					<input class="company-selected" type="hidden" name="companies_name" value="${element.id}">
					<span class="tag__icon-remove u-pointer-events-none" hidden>×</span>
			</div>`).insertBefore('#form-show #end-item');
			});
		}
		$('#form-show')
			.find(`.form__input[name=${property}]`)
			.val(objectNotification[property]);
	}
});

$(document).on('submit', '#form-show', async function (e) {
	try {
		e.preventDefault();
		removeErrors();
		let companiesName = new Array();
		$('input[name="companies_name"]').each(function () {
			companiesName.push($(this).val());
		});

		const data = Object.fromEntries(new FormData(e.target).entries());
		data.companies_name = companiesName;

		const dataResponse = await notificationRepository.update(data);

		setTimeout(() => {
			loading.hide();
			location.reload();
		}, 800);

		toastr.success(dataResponse.data);
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);

		generateValidationError(error.response.data.errors, $('#form-show'));
	}
});

function generateValidationError(errors, formItem) {
	const listInputInForm = formItem.find('.form__input');
	if (errors['companies_name']) {
		$('.tag-box-name-company').after(
			`<p class="validation-error"> ${errors['companies_name'][0]}</p>`
		);
	}

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
