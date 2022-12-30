import loading from '../../components/shared/loading';

$('#form-change-password').on('submit', async function (e) {
	try {
		setTimeout(() => {
			loading.hide();
		}, 500);

		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		const url = $('#form-change-password').attr('action');

		await axios.post(url, data);

		$('.card-success').attr('hidden', false);
		$('.card-change-password').remove();
	} catch (error) {
		loading.hide();
		const errors = error.response.data.errors;
		handleErrors(errors);
	}
});

function handleErrors(errors) {
	$('.validation-error').remove();
	if (errors.messages) {
		$('.form-group-password').before(
			`<p class="validation-error u-text-align-center">${errors.messages}</p>`
		);
	}
	console.log(errors);
	$.each(errors, function (key, value) {
		console.log(key);
		console.log(value);
		$(`input[name='${key}']`).after(
			`<p class="validation-error">${value[0]}</p>`
		);
	});
}
