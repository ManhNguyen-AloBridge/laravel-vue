import loading from '../../components/shared/loading';

$('#btn-submit').on('click', function () {
	loading.show();
	$('#form-confirm-create-staff').submit();
	$(this).prop('disabled', true);
	localStorage.setItem('pinned-tab', 'subscription-tab-tab');

	setTimeout(() => {
		loading.hide();
	}, 7000);
});
