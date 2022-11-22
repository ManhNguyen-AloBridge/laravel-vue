import loading from '../../components/shared/loading';

$('#form-reset').on('submit', async function (e) {
	try {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		const url = $('#form-reset').attr('action');

		await axios.post(url, data);

		$('.card').remove();
		$('.link').remove();
		$('.desc').after(
			` <div class="card login-box">
				<form action="/admin/login" method="GET">
					<p class="text text-xl" id="text-top">パスワード再設定完了</p>
					<p class="text" id="text-bottom">パスワードの再設定が完了しました。</p>
					<button class="btn" type="submit">
						ログインページ
					</button>
				</form>
			</div>`
		);
		$('body').removeClass('reset-password');
		$('body').addClass('changed-password');
		loading.hide();
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
	$.each(errors, function (key, value) {
		$(`input[name='${key}']`).addClass('--error');
		$(`input[name='${key}']`).after(
			`<p class="validation-error">${value}</p>`
		);
	});
}
