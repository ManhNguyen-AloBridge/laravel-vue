import { getRepository } from '../../repositories/repository-factory';
import ResponseCode from '../../constants/response-codes';

const stripeRepository = getRepository('stripe');
const companyRepository = getRepository('company');
const btnCancel = $('#btn-cancel');
const btnSave = $('#btn-save');
const btnChange = $('#btn-change');
const input = $(':input.form-control');
btnChange.on('click', function () {
	$(':input.form-control').removeAttr('readonly');
	btnSave.removeClass('d-none');
	btnCancel.removeClass('d-none');
	btnChange.addClass('d-none');
});

btnCancel.on('click', async function () {
	try {
		const res = await companyRepository.getDetail();
		const infoCompany = $('.info-company .form-group');
		$.each(res.data.company, function (key, value) {
			infoCompany.find(`input[name="${key}"]`).val(value);
		});
		$('.info-company .validation-error').remove();
		input.attr('readonly', 'readonly');
		btnSave.addClass('d-none');
		btnCancel.addClass('d-none');
		btnChange.removeClass('d-none');
	} catch (err) {
		toastr.error(err);
	}
});

btnSave.on('click', async function (e) {
	try {
		const arrayData = $('.info-company .form-group input').serializeArray();
		const objData = {};
		arrayData.forEach((item) => {
			objData[item.name] = item.value;
		});
		e.preventDefault();

		await companyRepository.update(objData);
		window.location = '/setting/company';
	} catch (err) {
		$('.info-company .validation-error').remove();
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).after(
				`<p class="text-sm m-0 text-danger validation-error" id="${key}"> ${value}</p>`
			);
		});
	}
});

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
		const { response } = error;
		if (response.status == ResponseCode.UNPROCESSABLE_ENTITY) {
			toastr.error(response.data.message);
		} else {
			toastr.error(response.data.errors.messages);
		}
	}
});

$('.input-number-subscription').on('change', async function () {
	try {
		const firstQuantity = $(this).data('first-quantity');
		const firstPrice = $(this).data('first-price');
		const secondPrice = $(this).data('second-price');
		const amount = $(this).val();
		const currentNumberSubscription = $(this).data('current-subscription');
		let additionFee = 0;
		if (currentNumberSubscription < amount) {
			additionFee = await getAdditionFee(amount);
		}

		const secondQuantity = amount - firstQuantity;
		const total =
			firstQuantity * firstPrice +
			(secondQuantity > 0 ? secondQuantity : 0) * secondPrice;

		$(this)
			.closest('form')
			.find('#addition-fee')
			.text(formatCurrency(additionFee));
		$(this)
			.closest('form')
			.find('.label-total')
			.text(formatCurrency(total));
	} catch (error) {
		console.error(error);
	}
});

async function getAdditionFee(newQuantity) {
	const res = await stripeRepository.retrieveAdditionFee({
		quantity: newQuantity,
	});
	const { addition_fee: additionFee } = res.data;

	return additionFee;
}

function formatCurrency(number) {
	return `${number.toLocaleString('ja-JP', {
		style: 'currency',
		currency: 'JPY',
	})}`;
}
