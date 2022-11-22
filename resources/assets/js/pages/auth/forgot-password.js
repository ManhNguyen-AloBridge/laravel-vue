$('#form-forgot-password').on('submit', async function (e) {
	try {
		const data = Object.fromEntries(new FormData(e.target).entries());
		e.preventDefault();
		$('.validation-error').remove();
		await axios.post('/forgot-password', data);
		$('#modal-success').modal('show');
	} catch (err) {
		$('.validation-error').remove();
		$.each(err.response.data.errors, function (key, value) {
			if (!$('.validation-error').length) {
				$('.input-group').after(
					`<p class="text-sm text-danger validation-error">${value}</p>`
				);
			}
		});
	}
});

$('#modal-success').on('hide.bs.modal', function () {
	window.location.href = '/login';
});
