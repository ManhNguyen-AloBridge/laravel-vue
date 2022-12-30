import loading from './loading';

$(document).ready(function () {
	$('.nav-sidebar .nav-item').on('click', function (event) {
		const classNav = $(this).attr('class');
		if (classNav.includes('setting')) {
			return;
		}
		loading.show();
	});

	window.onpageshow = function (event) {
		if (event.persisted) {
			loading.hide();
		}
	};
});
