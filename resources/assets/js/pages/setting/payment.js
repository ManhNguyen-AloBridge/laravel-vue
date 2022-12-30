import { getRepository } from '../../repositories/repository-factory';
import ResponseCode from '../../constants/response-codes';
import datatable from '../../components/shared/data-table';
import loading from '../../components/shared/loading';
import { EMAIL } from '../../constants/regex';

const stripeRepository = getRepository('stripe');
const userRepository = getRepository('user');
const companyRepository = getRepository('company');
const btnCancelChange = $('#btn-cancel-change');
const btnCancelConfirm = $('#btn-cancel-confirm');
const btnSave = $('#btn-save');
const btnChange = $('#btn-change');
const btnConfirm = $('#btn-confirm');
const input = $(':input.form__input');
const infoCompany = $('.info-company__body');
const textIndex = $('#text-index');
const textEdit = $('#text-edit');
const textConfirm = $('#text-confirm');
const dataCompany = $('form#info-company-tab');
const btnUnSelectedStaff = $('#btn-cancel');
const dataTable = $('.datatable.dataTable');
const data = {};
const table = datatable(data);
const inputUserEmail = $('#userEmail');
const tabDefaultDisplay = localStorage.getItem('pinned-tab');

$(document).ready(function () {
	renderBreadCrumbWhenChangeTab(tabDefaultDisplay);

	$(`.list-menu #${tabDefaultDisplay}`).addClass('active');
	$('#input-search').on('keyup', function () {
		table.search(this.value).draw();
	});
	handleClickedElement();

	$('#add-user-modal').on('shown.bs.modal', function () {
		$('#userEmail').focus();
	});
	if ($('#modal-import-file').find('.validation-error').length) {
		$('#modal-import-file').modal('show');
	}
});

$(document).on('click', function (e) {
	if ($('.extend-content__popup').length > 0) {
		if ($(e.target).closest('.extend-content').length > 0) {
			return;
		}

		if ($(e.target).closest('.extend-content__popup').length == 0) {
			removePopupButton();
		}
	}

	$('#modal-import-file').on('hidden.bs.modal', function () {
		$('#modal-import-file').find('.validation-error').remove();
		$('#input-import-file').val('');
		$('#btn-import-file').addClass('disabled');
	});
});

$(document).on('click', 'a[data-bs-target="#add-user-modal"]', function (e) {
	inputUserEmail.val('');
	removeErrors();
});

$(document).on('submit', '#info-company-tab', function () {
	setTimeout(() => {
		loading.hide();
	}, 1000);
});

btnChange.on('click', function () {
	renderBreadCrumbWhenUpdateInfoCompany(2); //step = 2
	btnConfirm.removeClass('d-none');

	btnChange.addClass('d-none');

	textIndex.addClass('d-none');

	textEdit.removeClass('d-none');

	btnCancelChange.removeClass('d-none');

	dataCompany.removeClass('form-read-only');
});

dataTable.on('click', '.btn-extend', function () {
	const isPopupOpen =
		$(this).parent().find('.extend-content__popup').length > 0;

	removePopupButton();
	if (!isPopupOpen) {
		const url = $(this).attr('data-url-detail');
		const nameCurrentRoute = $('#current-route').val();

		$(this).parent().append(`
		<div class="extend-content__popup">
			<ul>
				<li>
					<button class="btn btn rounded-0 --color-danger --md pt-0 pb-0 btns-action-top__btn border-0" type="button" data-bs-toggle="modal"
					data-bs-target="#modal-cancel-staffs-selected">
						<i class="fas fa-times"></i>${i18next.t('pages.payment.btn_remove_staff')}
					</button>
				<li>
				<li>
					<form action="${url}" method="GET">
						<input type="hidden" name="name_current_route" value="${nameCurrentRoute}">
						<button class="btn btn rounded-0 --md pt-0 pb-0 btns-action-top__btn border-0 --color-black" type="submit">
					${i18next.t('pages.payment.btn_remove_staff_selected')}
					</button>
					</form>
				</li>
			</ul>
		</div>
		`);
	}
});

function removePopupButton() {
	$('.extend-content__popup').remove();
}

btnUnSelectedStaff.on('click', function () {
	const pTag = $('#content-cancel-staff');
	pTag.text('');
	$('#content-cancel-staff').text(
		i18next.t('pages.payment.content_cancel_staff_pre') +
			data.listStaffSelected.length +
			i18next.t('pages.payment.content_cancel_staff_suf')
	);
});

btnChange.on('click', function () {
	btnConfirm.removeClass('d-none');
	btnChange.addClass('d-none');
	textIndex.addClass('d-none');
	textEdit.removeClass('d-none');
	btnCancelChange.removeClass('d-none');
	dataCompany.removeClass('form-read-only');
});

btnCancelChange.on('click', async function () {
	try {
		const res = await companyRepository.getDetail();
		$.each(res.data.company, function (key, value) {
			infoCompany.find(`input[name="${key}"]`).val(value);
			$(`#${key}`).text(value);
		});
		$('.validation-error').remove();
		btnConfirm.addClass('d-none');
		btnCancelChange.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		textEdit.addClass('d-none');
		renderBreadCrumbWhenUpdateInfoCompany(1); //step = 1
		dataCompany.addClass('form-read-only');
		$(`.form__input`).removeClass('--error');
	} catch (err) {
		toastr.error(err);
	}
});

function isEmail() {
	const dataForm = $('#userEmail').val();
	const regex = EMAIL;
	return regex.test(dataForm);
}

$(document).on('submit', '#form-invite-email', async function (e) {
	try {
		e.preventDefault();
		removeErrors();

		if (!isEmail()) {
			$('#userEmail').after(
				`<p class="validation-error">${i18next.t(
					'pages.setting.payment.create_staff.email_invalidate'
				)}</p>`
			);
			loading.hide();
			return;
		}

		const email = $('#userEmail').val();
		const res = await userRepository.checkExistsEmail({
			email,
		});

		e.currentTarget.submit();
		setTimeout(() => {
			loading.hide();
		}, 1000);
	} catch (errors) {
		loading.hide();
		$('#userEmail').after(
			`<p class="validation-error">${errors.response.data.errors.email}</p>`
		);
	}
});

btnCancelConfirm.on('click', function () {
	textEdit.removeClass('d-none');
	textConfirm.addClass('d-none');
	btnCancelChange.removeClass('d-none');
	btnCancelConfirm.addClass('d-none');
	btnConfirm.removeClass('d-none');
	btnSave.addClass('d-none');
	dataCompany.removeClass('form-read-only');
	renderBreadCrumbWhenUpdateInfoCompany(2); //step = 2
});

btnConfirm.on('click', async function (e) {
	try {
		const arrayData = input.serializeArray();
		const objData = {};
		e.preventDefault();
		removeErrors();
		arrayData.forEach((item) => {
			objData[item.name] = item.value;
			$(`#${item.name}`).text(item.value);
		});
		e.preventDefault();

		await companyRepository.confirmAdminUpdate(objData);
		btnSave.removeClass('d-none');
		btnConfirm.addClass('d-none');
		textConfirm.removeClass('d-none');
		textEdit.addClass('d-none');
		btnCancelConfirm.removeClass('d-none');
		btnCancelChange.addClass('d-none');
		dataCompany.addClass('form-read-only');
		renderBreadCrumbWhenUpdateInfoCompany(3); //step = 3
		$(`.form__input`).removeClass('--error');
	} catch (err) {
		removeErrors();
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).addClass('--error');
			$(`input[name=${key}]`).after(
				`<p class="validation-error" id="${key}"> ${value}</p>`
			);
		});
	}
});

$('#info-company-tab').on('submit', async function (e) {
	try {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		const result = await companyRepository.handleAdminUpdate(data);
		$.each(result.data.company, function (key, value) {
			infoCompany.find(`input[name="${key}"]`).val(value);
			$(`#${key}`).text(value);
		});
		dataCompany.addClass('form-read-only');
		btnSave.addClass('d-none');
		btnCancelConfirm.addClass('d-none');
		textConfirm.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		toastr.success(result.data.messages);
	} catch (err) {
		removeErrors();
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).after(
				`<p class="text-sm m-0 text-danger validation-error" id="${key}"> ${value}</p>`
			);
		});
	}
});

function removeErrors() {
	$('.validation-error').remove();
	$('.--error').removeClass('--error');
}

$('#form-update-subscription').on('submit', async function (e) {
	e.preventDefault();

	try {
		const quantity = $(this).find('input[name="quantity"]').val();
		const result = await stripeRepository.updateSubscription({
			quantity,
		});

		setTimeout(() => {
			location.reload();
		}, 600);
		$(this).closest('.modal').modal('hide');
		toastr.success(result.data.messages);
	} catch (error) {
		loading.hide();
		const { response } = error;
		if (response.status == ResponseCode.UNPROCESSABLE_ENTITY) {
			toastr.error(response.data.message);
		} else {
			toastr.error(response.data.errors.messages);
		}
	}
});

dataTable.on('click', '.btn-cancel-staff', function () {
	renderListStaffCancel($(this));
});

$('.btn-cancel-staff-selected').on('click', function () {
	renderListStaffCancel($(this));
});

function renderListStaffCancel(item) {
	removeStaffCancel();
	const idBtn = item.attr('id');
	let staffItem = '';

	if (idBtn) {
		data.listStaffSelected.forEach(function (item) {
			staffItem += `<input type="hidden" value="${_.escape(
				item.email
			)}" name="list_email_staff[]" class="staff-item">`;
		});
	} else {
		const staffEmail = item.attr('staff-email');
		staffItem = `<input type="hidden" value="${_.escape(
			staffEmail
		)}" name="list_email_staff[]" class="staff-item">`;
	}

	$('#list-staff-cancel').append(staffItem);
}

function removeStaffCancel() {
	$('.staff-item').remove();
}

async function showDefaultContentTabInfoCompany() {
	try {
		const res = await companyRepository.getDetail();
		$.each(res.data.company, function (key, value) {
			infoCompany.find(`input[name="${key}"]`).val(value);
			$(`#${key}`).text(value);
		});
		$('.validation-error').remove();
		renderBreadCrumbWhenUpdateInfoCompany(1); //step = 1
		btnSave.addClass('d-none');
		btnCancelConfirm.addClass('d-none');
		textConfirm.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		textEdit.addClass('d-none');
		btnConfirm.addClass('d-none');
		btnCancelChange.addClass('d-none');
		dataCompany.addClass('form-read-only');
		$(`.form__input`).removeClass('--error');
	} catch (err) {
		toastr.error(err);
	}
}

function handleClickedElement() {
	const listElementHandle = [
		'info-company-tab-tab',
		'subscription-tab-tab',
		'up-coming-invoice-tab-tab',
		'tab-invoices-tab',
	];

	listElementHandle.forEach(function (item) {
		$(`.${item}`).on('click', function () {
			removeErrors();
			if (item == 'info-company-tab-tab') {
				showDefaultContentTabInfoCompany();
			}

			renderBreadCrumbWhenChangeTab(item);
		});
	});
}

function renderBreadCrumbWhenUpdateInfoCompany(step) {
	removeItemRender();
	let header = [];

	if (step == 1) {
		header = [
			{
				title: i18next.t('layout.header.setting_company.info'),
			},
		];
	}
	if (step == 2) {
		header = [
			{
				title: i18next.t('layout.header.setting_company.edit'),
			},
		];
	}
	if (step == 3) {
		header = [
			{
				title: i18next.t('layout.header.setting_company.info'),
				route: url,
			},
			{
				title: i18next.t('layout.header.setting_company.confirm_edit'),
			},
		];
	}

	renderBreadCrumb(header);
}

function renderBreadCrumbWhenChangeTab(value) {
	removeItemRender();
	const url = window.location.href;
	let header = [
		{
			title: i18next.t('layout.header.setting_company.info'),
		},
	];

	switch (value) {
		case 'info-company-tab-tab':
			header = [
				{
					title: i18next.t('layout.header.setting_company.info'),
				},
			];
			break;
		case 'subscription-tab-tab':
			header = [
				{
					title: i18next.t('layout.header.setting_company.info'),
					route: url,
				},
				{
					title: i18next.t('layout.header.setting_company.register'),
				},
			];
			break;
		case 'up-coming-invoice-tab-tab':
			header = [
				{
					title: i18next.t('layout.header.setting_company.info'),
					route: url,
				},
				{
					title: i18next.t('layout.header.setting_company.next_bill'),
				},
			];
			break;
		case 'tab-invoices-tab':
			header = [
				{
					title: i18next.t('layout.header.setting_company.info'),
					route: url,
				},
				{
					title: i18next.t(
						'layout.header.setting_company.payment_history'
					),
				},
			];
			break;
		case 'btn-change':
			header = [
				{
					title: i18next.t('layout.header.setting_company.edit'),
				},
			];
			break;
	}

	renderBreadCrumb(header);
}

function renderBreadCrumb(header) {
	let listItemHeader = '';

	header.forEach((item, index) => {
		listItemHeader =
			listItemHeader +
			` <li class="breadcrumb-item item-render">
	                       ${
								item.route
									? `<a class="link --dark" href="${item.route}">${item.title}</a>`
									: `${item.title}`
							}
	                    </li>

				`;
	});

	$('.breadcrumb .breadcrumb-item').after(listItemHeader);
}

function removeItemRender() {
	$('.item-render').remove();
}

$(document).on('click', '#form-export-csv', function () {
	loading.hide();
});

function renderInputStaffEmail(listEmail) {
	$('#form-export-csv input[name="list_staff_email[]"]').remove();
	listEmail.forEach((element) => {
		$('.list-emails').append(
			`<input type="hidden" name="list_staff_email[]" value="${element.email}">`
		);
	});
}

$(document).on('click', '.checkbox__input', function () {
	if (!$('.checkbox-item:checked').length) {
		$('#btn-export-csv').addClass('disabled');
	} else {
		$('#btn-export-csv').removeClass('disabled');
	}
	renderInputStaffEmail(data.listStaffSelected);
});

$(document).on('change', function () {
	$('.validation-error').remove();
	if ($('#input-import-file').val().length) {
		$('#btn-import-file').removeClass('disabled');
	} else {
		$('#btn-import-file').addClass('disabled');
	}
});
$(document).on('click', function (e) {
	if (!e.target.classList.contains('close-list-menu')) {
		$('.list-menu').addClass('d-none');
	}
});

$(document).on('click', '.extend-menu', function () {
	$('.list-menu').toggleClass('d-none');
});

$(document).on('click', '.nav-link ', function () {
	$('.nav-link').removeClass('active');
	$(`.${$(this).attr('id')}`).addClass('active');
});

$(document).on('keyup keypress', '#info-company-tab', function (e) {
	let keyCode = e.keyCode || e.which;
	if (keyCode === 13) {
		e.preventDefault();
		return false;
	}
});
