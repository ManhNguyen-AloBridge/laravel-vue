import { getRepository } from '../../repositories/repository-factory';
import loading from '../../components/shared/loading';
import { NUMBER_LIMIT } from '../../constants/cv';

const userRepository = getRepository('user');
const mailRepository = getRepository('mail');
let dataResponse = [];

(async function () {
	const data = await userRepository.getAll();
	const { users: dataUsers } = data.data;
	dataResponse = dataUsers;

	handleLimitSelectCv();

	$('#input-search').on('keyup', function () {
		const countCvSelected = $('#input-staffs-email .tag').length;
		if (countCvSelected < NUMBER_LIMIT) {
			handleDataSearch(dataUsers, $(this));
		}
	});

	$('.suggest-search').on('click', '.suggest-search__item', function () {
		addItemSelected($(this));
		removeItemSelected($(this).attr('data-email'));
		$('#suggest-search').addClass('border-bottom-0');
		handleLimitSelectCv();
	});

	$('#btn-confirm-send').on('click', async function (e) {
		try {
			e.preventDefault();
			removeErrorMsg();
			const result = await sendMultiCv(e.target);
			if (result) {
				$('#confirm-send-mail').modal('show');
			}
		} catch (error) {
			toastr.error('Something went wrong!');
		}
	});

	$('#btn-accept').on('click', function () {
		loading.show();
		$('#form-send-cv').submit();
	});
})();

$(document).on('click', '.tag__icon-remove', function () {
	handleLimitSelectCv();
});

function handleLimitSelectCv() {
	const countCvSelected = $('#input-staffs-email .tag').length;
	if (countCvSelected >= NUMBER_LIMIT) {
		$('.suggest-search__item').remove();
		return;
	}
}

$(document).on('click', function (e) {
	const countCvSelected = $('#input-staffs-email .tag').length;
	if (countCvSelected < NUMBER_LIMIT) {
		handleInputSearch(dataResponse, $(e.target).attr('class'));
	}
});
async function sendMultiCv(target) {
	try {
		removeErrorMsg();
		const data = getDataForm(target);
		await mailRepository.sendMultiCv(data);

		return true;
	} catch (error) {
		loading.hide();
		removeErrorMsg();
		renderErrorResponse(error);
		return false;
	}
}

function getDataForm(target) {
	const data = {};
	const listElement = $('#form-send-cv').find('.item-form');

	listElement.map((index, item) => {
		const fieldTagBox = $(item).find('.tag-box');
		let idFieldTagBox = fieldTagBox.attr('id');

		if (idFieldTagBox && idFieldTagBox.includes('input-')) {
			idFieldTagBox = idFieldTagBox.slice(6).replace('-', '_');
		}

		if (fieldTagBox.length > 0 && fieldTagBox.find('.tag input')) {
			const listItem = [];

			$(`#${$(fieldTagBox).attr('id')} input`).map((index, item) => {
				const email = $(item).val();
				listItem.push(email);
			});
			data[idFieldTagBox] = listItem;
		}
	});

	data['sender'] = $('input[id=input-sender]').val();
	data['subject'] = $('input[id=input-subject]').val();
	data['body'] = $('textarea[id=input-body]').val();

	return data;
}

function renderErrorResponse(error) {
	const errors = error.response?.data?.errors;

	$('.item-form').map(function (index, item) {
		const fieldInputData = $(item).find('.input-field ');
		let idFieldInput = fieldInputData.attr('id');
		if (idFieldInput && idFieldInput.includes('input-')) {
			idFieldInput = idFieldInput.slice(6).replace('-', '_');
		}

		if (errors && errors[idFieldInput]) {
			if (idFieldInput == 'staffs_email') {
				fieldInputData
					.parent()
					.after(
						`<p class="validation-error">${errors[idFieldInput]}</p>`
					);
				return;
			}
			fieldInputData.after(
				`<p class="validation-error u-unset-height">${errors[idFieldInput]}</p>`
			);
		}
	});
}

function removeErrorMsg() {
	$('.validation-error').remove();
}

function handleInputSearch(dataUsers, classItem) {
	if (classItem && classItem.includes('search-box__input')) {
		handleDataSearch(dataUsers, $('#input-search'));
	} else {
		$('.suggest-search__item').addClass('d-none');
		$('#suggest-search').addClass('border-bottom-0');
	}
}

function handleDataSearch(dataUsers, item) {
	$('.suggest-search__item').remove();
	const arraySearch = handleDataSearchUnSelected(dataUsers);
	const keyWord = $(item).val();
	renderSuggestSearch(arraySearch, keyWord);
}

function renderSuggestSearch(arrayData, keyWord) {
	const listResult = [];
	const listStaffSelected = getListStaffSelected();
	arrayData.forEach(function (item) {
		if (listStaffSelected.includes(item.email)) {
			return;
		}

		if (
			(item.first_name != null &&
				item.first_name.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.last_name != null &&
				item.last_name.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.first_name_kana != null &&
				item.first_name_kana.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.last_name_kana != null &&
				item.last_name_kana.toLowerCase().indexOf(keyWord) >= 0)
		) {
			const space =
				item.last_name && item.first_name
					? i18next.t('common.space')
					: '';
			const nameStaff = item.last_name + space + item.first_name;

			listResult.push(`
					<li class="suggest-search__item" data-email="${_.escape(
						item.email
					)}" data-name="${_.escape(nameStaff)}">${_.escape(
				nameStaff
			)}</li>
					`);
		}
	});

	$('#suggest-search').removeClass('border-bottom-0');

	$('#suggest-search').append(listResult);
}

function getListStaffSelected() {
	const listStaffSelected = [];
	$('.search-box .tag-box .tag input').each((index, item) => {
		listStaffSelected.push($(item).val());
	});

	return listStaffSelected;
}

function handleDataSearchUnSelected(data) {
	const emailSelected = [];
	const arrayEmail = [];

	$('.tag-box')
		.find('.user-selected')
		.map(function (index, item) {
			return emailSelected.push(item.value);
		});

	data.forEach(function (item) {
		if (!emailSelected.includes(item.email)) {
			arrayEmail.push(item);
		}
	});

	return arrayEmail;
}

function removeItemSelected(email) {
	$(`[data-email='${email}']`).remove();
}

function addItemSelected(item) {
	const nameStaff = _.escape($(item).attr('data-name'));
	const email = _.escape($(item).attr('data-email'));
	$(`
	<div class="tag">
		<span class="">
			${nameStaff}
		</span>
		<input class="user-selected" type="hidden" name="staffs_email[]" value="${email}">
		<span class="tag__icon-remove">×</span>
</div>`).insertBefore('#end-item');
}
