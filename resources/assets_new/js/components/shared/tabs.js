const navLink = $('.main-content .nav-link');

if (navLink.length) {
	navLink.on('click', function () {
		localStorage.setItem('pinned-tab', $(this).attr('id'));
	});
} else {
	localStorage.setItem('pinned-tab', 'undefined');
}

$(document).ready(function () {
	setDefaultTabDisplay();
});

function setDefaultTabDisplay() {
	const idTabDefaultDisplay = localStorage.getItem('pinned-tab');
	if (idTabDefaultDisplay != 'undefined') {
		const tabDefaultDisplay = $(`#${idTabDefaultDisplay}`);
		if (!tabDefaultDisplay.attr('href')) {
			return;
		}

		const ibTabDisplay = tabDefaultDisplay.attr('href').slice(1);
		const tabCurrentDisplay = $(
			`#${$('.tab-pane.fade.show.active').attr('id')}`
		);
		tabCurrentDisplay.removeClass('active show');

		$('.main-content .nav-link.active').removeClass('active');

		tabDefaultDisplay.addClass('active');
		$(`#${ibTabDisplay}`).addClass('show active');
		return;
	}
}
