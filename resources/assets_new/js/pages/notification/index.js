import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';

const companyRepository = getRepository('company');
const notificationRepository = getRepository('notification');

const formDelete = $('form[modal-id=confirm-delete-notification]');
const formAdd = $('#form-add');

$('#btn-add-company').on('click', function () {
	removeErrors();
	$('.date-time-picker').attr('autocomplete', 'off');
});

$('#btn-close').on('click', function () {
	removeErrors();
});

(async function () {
	const data = await companyRepository.getAll();
	const { companies: dataCompanies } = data.data;

	$(document).on('click', function (e) {
		handleInputSearch(dataCompanies, $(e.target).attr('class'));
	});

	$(document).on('click', 'input[name="noti_to"]', function (event) {
		handleDataSearch(dataCompanies, $('#input-search'));
		if ($('input[name="noti_to"]').is(':checked')) {
			for (const [key, company] of Object.entries(dataCompanies)) {
				$(`
				<div class="tag">
					<span class="">
						${company.name}
					</span>
					<input class="company-selected" type="hidden" name="companies_name" value="${company.id}">
					<span class="tag__icon-remove">×</span>
			</div>`).insertBefore('#end-item');
			}
			$('.suggest-search__item').remove();
		} else {
			$('.tag').remove();
		}
	});

	$('#input-search').on('keyup', function () {
		handleDataSearch(dataCompanies, $(this));
	});

	$('.suggest-search').on('click', '.suggest-search__item', function () {
		addItemSelected($(this));
		checkTypeNoification(dataCompanies);
	});
})();

function handleInputSearch(dataCompanies, classItem) {
	if (classItem && classItem.includes('search-box__input')) {
		handleDataSearch(dataCompanies, $('#input-search'));
	} else {
		$('.suggest-search__item').addClass('d-none');
	}
}

function handleDataSearch(dataCompanies, item) {
	$('.suggest-search__item').remove();
	const arraySearch = handleDataSearchUnSelected(dataCompanies);
	const keyWord = $(item).val();
	renderSuggestSearch(arraySearch, keyWord);
}

function handleDataSearchUnSelected(data) {
	const companySelected = [];
	const arrayCompany = [];

	$('.tag-box')
		.find('.company-selected')
		.map(function (index, item) {
			return companySelected.push(parseInt(item.value));
		});

	data.forEach(function (item) {
		if (!companySelected.includes(item.id)) {
			arrayCompany.push(item);
		}
	});
	return arrayCompany;
}

function renderSuggestSearch(arrayData, keyWord) {
	const listResult = [];
	const listCompanySelected = getListCompanySelected();
	arrayData.forEach(function (item) {
		if (listCompanySelected.includes(item.name)) {
			return;
		}

		if (
			item.name != null &&
			item.name.toLowerCase().indexOf(keyWord.toLowerCase().trim()) >= 0
		) {
			listResult.push(`
					<li class="suggest-search__item" data-id="${item.id}" data-name="${_.escape(
				item.name
			)}">${_.escape(item.name)}</li>
					`);
		}
	});

	$('#suggest-search').append(listResult);
}

function getListCompanySelected() {
	const listCompanySelected = [];
	$('.search-box .tag-box .tag input').each((index, item) => {
		listCompanySelected.push($(item).val());
	});

	return listCompanySelected;
}

function addItemSelected(item) {
	const nameCompany = _.escape($(item).attr('data-name'));
	const idCompany = _.escape($(item).attr('data-id'));
	$(`
	<div class="tag">
		<span class="">
			${nameCompany}
		</span>
		<input class="company-selected" type="hidden" name="companies_name" value="${idCompany}">
		<span class="tag__icon-remove">×</span>
</div>`).insertBefore('#end-item');
}

$('.tag-box').on('click', 'span.tag__icon-remove', function () {
	$(this).parents('.tag').remove();
	$('input[name="noti_to"]').prop('checked', false);
});

$(document).on('submit', '#form-add', async function (e) {
	try {
		e.preventDefault();
		removeErrors();
		let companiesName = new Array();
		$('input[name="companies_name"]').each(function () {
			companiesName.push($(this).val());
		});

		const data = Object.fromEntries(new FormData(e.target).entries());
		data.companies_name = companiesName;
		const dataResponse = await notificationRepository.store(data);

		setTimeout(() => {
			loading.hide();
			window.location.href = '/notifications';
		}, 800);
		toastr.success(dataResponse.data);
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);

		generateValidationError(error.response.data.errors, formAdd);
	}
});

$(document).on('click', '#btn-delete-noti', async function () {
	try {
		const result = await notificationRepository.deleteNoti(
			formDelete.attr('id-company')
		);

		$('#confirm-delete-notification').modal('toggle');

		setTimeout(() => {
			loading.hide();
			location.reload();
		}, 800);

		toastr.success(result.data);
	} catch (error) {
		setTimeout(() => {
			loading.hide();
		}, 300);
		toastr.success(i18next.t('pages.notification.delete_error'));
	}
});

$(document).on('click', '.btn-confirm-delete', function () {
	const itemParent = $(this).parent().parent();
	const messageText = $(itemParent.find('#content-text')[0]).text();
	const idItem = $(this).attr('id-item');
	formDelete.attr('id-company', idItem);
	formDelete.find('#msg-confirm-delete').text(messageText);
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

function checkTypeNoification(dataCompanies) {
	if ($('.tag').length == dataCompanies.length) {
		$('input[name="noti_to"]').prop('checked', true);
	} else {
		$('input[name="noti_to"]').prop('checked', false);
	}
}
