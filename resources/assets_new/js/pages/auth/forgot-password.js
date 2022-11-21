import loading from '../../components/shared/loading';

$('#form-forgot-password').on('submit', async function (e) {
	try {
		const data = Object.fromEntries(new FormData(e.target).entries());
		e.preventDefault();
		$('.form__input').removeClass('--error');
		$('.validation-error').remove();
		await axios.post('/admin/forgot-password', data);
		loading.hide();
		$('#modal-success').modal('show');
	} catch (err) {
		loading.hide();
		$('.validation-error').remove();
		$('.form__input').addClass('--error');
		$('.form__input').after(
			`<p class="validation-error">${err.response.data.errors.email}</p>`
		);
	}
});

$('#modal-success').on('hide.bs.modal', function () {
	window.location.href = '/admin/login';
});

$('.btn-accept').on('click', function () {
	$('#modal-success').modal('hide');
});
