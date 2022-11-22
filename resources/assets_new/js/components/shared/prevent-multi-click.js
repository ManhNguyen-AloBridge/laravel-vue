import loading from '../../components/shared/loading';

$(document).ready(function () {
	$('button[type="submit"]').on('click', function (event) {
		event.preventDefault();
		$(this).prop('disabled', true);
		loading.show();

		setTimeout(() => {
			$(this).prop('disabled', false);
		}, 1000);
		$(this).closest('form').trigger('submit');
	});
});
