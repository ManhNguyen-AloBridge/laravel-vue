const btnSave = $('#btn-save-price');
const btnAdd = $('#btn-add-price');
const inputPrice = $('#field-input-price');
const inputDescription = $('#field-input-description');

btnAdd.on('click', function () {
	btnAdd.addClass('d-none');
	btnSave.removeClass('d-none');
	inputPrice.removeClass('d-none');
	inputDescription.removeClass('d-none');
});
