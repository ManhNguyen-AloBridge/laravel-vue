import axios from 'axios';
const token = $('meta[name="csrf-token"]').attr('content');

const btnChange = $('#btn-change');
const btnCancelChange = $('#btn-cancel-change');
const btnConfirm = $('#btn-confirm');
const btnSave = $('#btn-save');
const btnCancelConfirm = $('#btn-cancel-confirm');
const textIndex = $('#text-index');
const textEdit = $('#text-edit');
const dataUser = $('form#info-user-tab');
const infoUser = $('.info-user__body');
const input = $(':input.form__input');
const textConfirm = $('#text-confirm');


$('document').ready(function () {
});

btnChange.on('click', function () {
	btnConfirm.removeClass('d-none');
	btnChange.addClass('d-none');
	textIndex.addClass('d-none');
	textEdit.removeClass('d-none');
	btnCancelChange.removeClass('d-none');
	dataUser.removeClass('form-read-only');
});

btnCancelChange.on('click', async function () {
	axios.defaults.headers['x-csrf-token'] = token;
	const service = await axios.create({
		withCredentials: true,
		timeout: 30000,
	});
	const id = $('#info-user-tab [name="id"]').val();
	const result = await service.get('/admin/users/'+id,
		{
			headers: {
				"X-Requested-With": "XMLHttpRequest",
			}
		}
	);

    infoUser.find(`input[name="name"]`).val(result.data.name);
    infoUser.find(`input[name="email"]`).val(result.data.email);
    $('.validation-error').remove();
    btnConfirm.addClass('d-none');
    btnCancelChange.addClass('d-none');
    btnChange.removeClass('d-none');
    textIndex.removeClass('d-none');
    textEdit.addClass('d-none');
    dataUser.addClass('form-read-only');
    $(`.form__input`).removeClass('--error');
});

btnConfirm.on('click', async function (e) {
	try {
		const arrayData = input.serializeArray();
		const objData = {};
		e.preventDefault();
		removeErrors();
		arrayData.forEach((item) => {
			if (item.name == 'price') {
				const valuePrice = inputPriceSelected.val();
				objData[item.name] = item.value;
				$(`#${item.name}`).text(valuePrice);
			} else {
				objData[item.name] = item.value;
				$(`#${item.name}`).text(item.value);
			}
		});

        axios.defaults.headers['x-csrf-token'] = token;
        const service = await axios.create({
            withCredentials: true,
            timeout: 30000,
        });
        const result = await service.put('/admin/users/'+objData.id,
            objData, 
            {
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                }
            }
        );

		btnSave.addClass('d-none');
		btnCancelConfirm.addClass('d-none');
		btnConfirm.addClass('d-none');
        btnCancelChange.addClass('d-none');
		textConfirm.addClass('d-none');
		btnChange.removeClass('d-none');
		textIndex.removeClass('d-none');
		dataUser.addClass('form-read-only');
		$(`.form__input`).removeClass('--error');
		toastr.success(result.data.message);
	} catch (err) {
		removeErrors();
        console.log(err);
		$.each(err.response.data.errors, function (key, value) {
			$(`input[name=${key}]`).addClass('--error');
			$(`input[name=${key}]`).after(
				`<p class="validation-error" id="${key}"> ${value}</p>`
			);

			if ($(`select[name=${key}]`)) {
				$(`select[name=${key}]`).addClass('--error');
				$(`select[name=${key}]`).after(
					`<p class="validation-error" id="${key}"> ${value}</p>`
				);
			}
		});
	}
});

function removeErrors() {
	$('.validation-error').remove();
	$('.--error').removeClass('--error');
}
