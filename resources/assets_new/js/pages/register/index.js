import responseCodes from '../../constants/response-codes';
import processClass from '../../components/process';
import axios from 'axios';
import loading from '../../components/shared/loading';
const token = $('meta[name="csrf-token"]').attr('content');
axios.defaults.headers['x-csrf-token'] = token;
const service = axios.create({
	withCredentials: true,
	timeout: 30000,
});

const childPages = $('.child-page');
const userFillList = $('.form.company .confirm-group__data-item').filter(
	'[data-user]'
);

const submitUserInfo = $('#user-page button[type="submit"]');
const registerButton = $('#confirm-page button[type="submit"]');
const toFixButton = $('#confirm-page button[data-step="0"]');
const checkboxConfirmTerms = $('#confirm-terms');
const btnContinue = $('#btn-continue');

checkboxConfirmTerms.on('change', function () {
	if ($(this).is(':checked')) {
		btnContinue.removeClass('--disabled');
		return;
	}

	btnContinue.addClass('--disabled');
});

btnContinue.on('click', function () {
	setTimeout(() => {
		loading.hide();
	}, 300);
	$('#content-page-register').removeClass('hidden');
	$('#content-confirm-terms').addClass('hidden');
});

function pageInputs(page = 'user') {
	const query = '#' + page + '-page input';
	return $(query);
}
function pageInputsData(page = 'user') {
	const data = {};
	pageInputs(page).each(function () {
		const inputName = $(this).attr('name');
		const inputVal = $(this).val();
		if (!$(this).is(':radio')) {
			data[inputName] = inputVal;
			return;
		}
		data[inputName] = data[inputName]
			? data[inputName]
			: $(this).prop('checked')
			? inputVal
			: '';
	});
	return data;
}
function removeValidationError() {
	$('.group__input').removeClass('--error');
	$('.form__input').removeClass('--error');
	$('.error-message').remove();
}

function createErrorMessage(error) {
	return (
		'<span class= "error-message text --xs color-danger">' +
		error[0] +
		'</span>'
	);
}
function displayInputError(page, errors) {
	let first = true;
	const inputs = $(`#${page}-page input`);
	inputs.each((index, element) => {
		const name = $(element).attr('name');

		if (name in errors || `${page}.${name}` in errors) {
			$(element).addClass('--error');
			$(element).closest('.form__group').find('.error-message').remove();
			$(element)
				.closest('.form__group')
				.append(
					createErrorMessage(
						errors[name] || errors[`${page}.${name}`]
					)
				);

			if (first) {
				first = false;
				$(element)?.closest('.form__group').get(0).scrollIntoView();
			}
		}
	});
}
function fillDataIfPassedValidate(data, page = 'user') {
	let fillList = userFillList;
	let attr = 'data-user';

	fillList.each(function () {
		let input = $(this);
		let inputName = $(this).attr(attr);
		if (inputName in data) {
			input.text(data[inputName]);
		}
	});
}
function showPage(number) {
	$(childPages).css({ opacity: '0' });
	$(childPages[number]).show();
	$(childPages[number]).animate(
		{
			display: 'block',
			opacity: '1',
		},
		800
	);
}
async function nextPage() {
	let currentStep = process.currentStep;
	$(childPages[currentStep]).css({ opacity: '1' });

	$('#header')[0].scrollIntoView();
	process.moveToNextStep();
	await $(childPages[currentStep]).animate(
		{
			opacity: '0',
		},
		800,
		function () {
			$(childPages[currentStep]).hide();
			showPage(currentStep + 1);
		}
	);
}

function moveToStep(stepNumber) {
	$('#header')[0].scrollIntoView();
	let currentStep = process.currentStep;
	process.backToStep(stepNumber);
	$(childPages[currentStep]).animate(
		{
			display: 'block',
			opacity: '0',
		},
		800,
		function () {
			$(childPages[currentStep]).hide();
			showPage(stepNumber);
		}
	);
}
async function validateUserInputs() {
	try {
		let data = pageInputsData('user');
		data.isValidate = true;
		await service.post('/admin/register', data,
			{
				headers: {
					"X-Requested-With": "XMLHttpRequest",
				}
			}
		);

		fillDataIfPassedValidate(data, 'user');

		nextPage();
	} catch (err) {
		loading.hide();
		let errors = err.response.data.errors;
		displayInputError('user', errors);
	}
}

async function registerService() {
	try {
		const userData = pageInputsData('user');

		await service.post('/admin/register', userData,
			{
				headers: {
					"X-Requested-With": "XMLHttpRequest",
				}
			}
		);

		$('#content-steps').addClass('content-steps');
		setTimeout(() => {
			loading.hide();
		}, 1000);
		nextPage();
	} catch (err) {
		loading.hide();
		const { data, status } = err.response;
		if (status !== responseCodes.UNPROCESSABLE_ENTITY) {
			toastr.error(data.status);
			return;
		}

		const errorKeys = Object.keys(data.errors).join('');
		let step;

		if (errorKeys.includes('user')) {
			displayInputError('user', data.errors);
			step = 0;
		}
		moveToStep(step);
	}
}
submitUserInfo.click(function () {
	setTimeout(() => {
		loading.hide();
	}, 1000);

	removeValidationError();
	validateUserInputs();
});
registerButton.click(function () {
	registerService();
});
const process = new processClass($('#process'));

process.steps.each(function (index) {
	const indexStep = index;
	process.setStepEvent($(this), function () {
		moveToStep(indexStep);
	});
});
toFixButton.click(function () {
	moveToStep(0);
});
