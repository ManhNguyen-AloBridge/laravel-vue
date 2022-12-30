import datatable from '../../components/shared/data-table';
import loading from '../../components/shared/loading';

const data = {};

datatable(data);

$(document).ready(function () {
	$('input[type=checkbox]').prop('checked', false).removeAttr('checked');
	setWidthItemOptionSelect2();

	$('a.link-detail').on('click', function () {
		loading.show();
	});

	$('#btn-search').on('click', function () {
		loading.show();

		setTimeout(() => {
			loading.hide();
		}, 1000);
	});
});

$('.select-normal').on('change', function () {
	if ($(this).val() == '') $(this).addClass('empty');
	else $(this).removeClass('empty');
});

$('.select-normal').trigger('change');

$('#is-hidden').on('click', function () {
	const isChecked = $(this).attr('checked');

	if (!isChecked) {
		return;
	}

	toggleCheckedCheckbox(isChecked, !$(this));
});

$('#form-download').on('submit', function () {
	loading.hide();
	$('#download-cv-modal').modal('hide');
});

$('.datatable.dataTable').on('click', '.detail-staff-submit', function () {
	const form = $(this).closest('form')[0];
	$(form).submit();
});

function renderInputStaffEmail(isSendMail) {
	const areaRenderEmail = isSendMail
		? $('#list-input-mail-send')
		: $('#list-input-mail-download');
	let listNameStaff = '';

	removeListNameDownload();

	data.listStaffSelected.forEach(function (item) {
		if (!isSendMail) {
			listNameStaff = `${listNameStaff}, ${item.name}`;
		}

		areaRenderEmail.append(
			`<input type="hidden" class="input-rendered" name="list_staff_email[]" value="${_.escape(
				item.email
			)}">`
		);
	});

	if (!isSendMail && listNameStaff.length > 0) {
		$('#list-name-staff-download').append(
			`<p class="m-0" id="list-name-staff">${_.escape(
				listNameStaff.slice(2)
			)}</p>`
		);
	}
}

$('#send-cv-selected').on('submit', function () {
	const isSendMail = true;
	renderInputStaffEmail(isSendMail);
});

$('#download-cv-selected').on('click', function () {
	removeListInputDataDownload();
	const isChecked = $(this).attr('is-name-hidden');
	const isSendMail = false;

	renderInputStaffEmail(isSendMail);

	toggleCheckedCheckbox(isChecked, $('#is-hidden'));
});

function removeListNameDownload() {
	$('#list-name-staff').remove();
}

function removeListInputDataDownload() {
	$('.input-rendered').remove();
}

function toggleCheckedCheckbox(isChecked, element) {
	if (isChecked) {
		element.prop('checked', true).attr('checked', 'checked');
		return;
	}

	element.prop('checked', false).removeAttr('checked');
}

$('.select2').on('select2:select', function (e) {
	setWidthItemOptionSelect2();
});

function setWidthItemOptionSelect2() {
	const widthSelectAndOrOption = $(
		'.select-box.--input.select-and-or__option'
	)[0].offsetWidth;

	const widthForLiTag =
		$('.select-box.--input.form__control')[0].offsetWidth -
		widthSelectAndOrOption -
		10;

	$.each(
		$('.select2.select2-container').find('ul'),
		function (key, ulElement) {
			$(ulElement)
				.find('li')
				.attr('style', `max-width:${widthForLiTag}px !important`);
		}
	);
}
