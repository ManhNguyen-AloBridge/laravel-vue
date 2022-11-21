const { list } = require('postcss');

$(document).ready(function () {
	$('input[type=checkbox]').prop('checked', false).removeAttr('checked');
});

const listPageSelectedAll = [];
let listStaffSelected = [];
const table = $('.datatable.dataTable').DataTable();

$('.select-normal').on('change', function () {
	if ($(this).val() == '') $(this).addClass('empty');
	else $(this).removeClass('empty');
});

$('.select-normal').trigger('change');

$('.datatable.dataTable')
	.on('page.dt', function () {
		if (!listPageSelectedAll.includes(table.page.info().page)) {
			$('.check-all').prop('checked', false).removeAttr('checked');
		} else {
			$('.check-all').prop('checked', true).attr('checked', 'checked');
		}
	})
	.dataTable();

$('.datatable.dataTable').on('click', '.check-all', function () {
	const isSelectAll = $('.check-all').attr('checked');
	const infoTable = table.page.info();

	if (isSelectAll) {
		toggleCheckedCheckbox(false, $('.check-all'));
		toggleCheckedCheckbox(false, $('.datatable').find('.checkbox-item'));
		removeItemFormListStaffSelected($('.datatable').find('.checkbox-item'));
		checkItemChecked();
	} else {
		setListStaffEmailSelectedAll(
			$('.datatable').find('.checkbox-item:not(:checked)')
		);
		toggleCheckedCheckbox(true, $('.check-all'));
		toggleCheckedCheckbox(true, $('.datatable').find('.checkbox-item'));
		checkItemChecked();
	}

	if (!listStaffSelected.length > 0) {
		$('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
		removeListNameDownload();
	} else {
		$('.btn-disable').removeClass('disabled').removeAttr('disabled');
	}
});

$('#send-cv-selected').on('submit', function () {
	const isSendMail = true;
	renderInputStaffEmail(isSendMail);
});

$('#download-cv-selected').on('click', function () {
	const isChecked = $(this).attr('is-name-hidden');
	const isSendMail = false;

	renderInputStaffEmail(isSendMail);
	if (isChecked) {
		$('#is-hidden').attr('checked', 'checked').prop('checked', true);
	}
});

$('#is-hidden').on('click', function () {
	const isChecked = $(this).attr('checked');

	if (isChecked) {
		$(this).removeAttr('checked').prop('checked', false);
	} else {
		$(this).attr('checked', 'checked').prop('checked', true);
	}
});

$('#form-download').on('submit', function () {
	$('#download-cv-modal').modal('hide');
});

function removeItemFormListStaffSelected(listItemRemove) {
	listItemRemove.map(function (index, input) {
		listStaffSelected.find(function (item, index) {
			if (item.email == input.id) {
				return listStaffSelected.splice(index, 1);
			}
		});
	});
}

function renderInputStaffEmail(isSendMail) {
	const areaRenderEmail = isSendMail
		? $('#list-input-mail-send')
		: $('#list-input-mail-download');
	let listNameStaff = '';

	removeListNameDownload();

	listStaffSelected.forEach(function (item) {
		if (!isSendMail) {
			listNameStaff = `${listNameStaff}, ${item.name}`;
		}

		areaRenderEmail.append(
			`<input type="hidden" name="list_staff_email[]" value="${item.email}">`
		);
	});

	if (!isSendMail && listNameStaff.length > 0) {
		$('#list-name-staff-download').append(
			`<p class="m-0" id="list-name-staff">${listNameStaff.slice(
				2,
				-1
			)}</p>`
		);
	}
}

function checkItemChecked() {
	const countItemInPage = $('.checkbox-item').length;
	const countItemChecked = $('.checkbox-item:checked').length;
	const currentPage = table.page.info().page;

	if (countItemInPage != countItemChecked) {
		if (listPageSelectedAll.includes(currentPage)) {
			listPageSelectedAll.splice(
				listPageSelectedAll.indexOf(currentPage),
				1
			);
		}
		toggleCheckedCheckbox(false, $('.datatable').find('.check-all'));
		return;
	}
	listPageSelectedAll.push(currentPage);

	toggleCheckedCheckbox(true, $('.datatable').find('.check-all'));
}

function toggleCheckedCheckbox(isChecked, element) {
	if (isChecked) {
		element.prop('checked', true).attr('checked', 'checked');
		return;
	}

	element.prop('checked', false).removeAttr('checked');
}

function removeListNameDownload() {
	$('#list-name-staff').remove();
}

function setListStaffEmailSelectedAll(listInput) {
	listInput.map(function (index, item) {
		listStaffSelected.push({ name: item.value, email: item.id });
	});
}

function unsetStaffEmailInList(email) {
	listStaffSelected.find(function (item, index) {
		if (item.email == email) {
			return listStaffSelected.splice(index, 1);
		}
	});
}

$('.datatable.dataTable').on('click', '.checkbox-item', function () {
	const isSelected = $(this).attr('checked');
	if (isSelected) {
		$(this).removeAttr('checked').prop('checked', false);
		unsetStaffEmailInList($(this).attr('id'));
	} else {
		$(this).attr('checked', 'checked').prop('checked', true);
		listStaffSelected.push({
			name: $(this).val(),
			email: $(this).attr('id'),
		});
	}

	checkItemChecked();

	if (listStaffSelected.length > 0) {
		$('.btn-disable').removeClass('disabled').removeAttr('disabled');
	} else {
		$('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
	}
});
