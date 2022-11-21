$('#submit-form').on('click', function () {
	$('.alert.text-danger').addClass('d-none');
	$('.alert.text-danger').text('');
	$('.form-control').removeClass('is-invalid');

	const token = $("input[name='token']").val();
	const email = $("input[name='email']").val();
	const password = $("input[name='password']").val();
	const password_confirmation = $(
		"input[name='password_confirmation']"
	).val();
	const url = $('#form-reset').attr('action');

	axios
		.post(url, {
			token,
			email,
			password,
			password_confirmation,
		})
		.then(function (response) {
			$('#modal-confirm').modal('show');
		})
		.catch(function (error) {
			const errors = error.response.data.errors;
			handleErrors(errors);
		});
});

function handleErrors(errors) {
	if (errors['messages']) {
		$('#error-handle').text(errors['messages']);
		$('#error-handle').removeClass('d-none');
	}

	for (const key in errors) {
		if (errors[key]) {
			const error = `#error-${key}`;
			const idError = error.replace('_', '-');
			const idInput = `#${key}`;
			$(idInput).addClass('is-invalid');
			$(idError).text(errors[key][0]);
			$(idError).removeClass('d-none');
		}
	}
}

$('#modal-confirm').on('hidden.bs.modal', function() {
	window.location.href = 'login'
});
