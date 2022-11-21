import loading from '../components/shared/loading';

const mainSidebar = $('.main-sidebar');
const mainContent = $('.main-content');
const btnOpenSidebar = $('#btn-open-sidebar');
const btnCloseSidebar = $('#btn-close-sidebar');
const modal = $(document).find('.modal');
let screenWidth = $('body').width();

$(window).on('resize', function () {
	screenWidth = $('body').width();
	handleOutClickSidebar(screenWidth);
});

$(document).ready(function () {
	$('.navbar__link li').on('click', function (e) {
		const link = $(e.target).attr('href');

		if (link == '#' || link == undefined) {
			return;
		}

		loading.show();
	});

	showCompanySelection();
	handleOutClickSidebar(screenWidth);
});

$(document).on('click', function (e) {
	if (screenWidth <= 992) {
		const isInSidebar = $(e.target).closest('.main-sidebar').length;
		const isBtnOpenSidebar = $(e.target).closest(
			'#btn-open-sidebar'
		).length;

		if (!isInSidebar && !isBtnOpenSidebar) {
			handleCloseSidebar();
		}
	}
});

function handleOutClickSidebar(screenWidth) {
	if (screenWidth <= 992) {
		handleCloseSidebar();
	}
}

function showSidebar() {
	mainSidebar.removeClass('--close');
	mainSidebar.addClass('--extend');
	mainContent.removeClass('--extend');
	mainContent.addClass('--limit');
}

function hideSidebar() {
	mainSidebar.addClass('--close');
	mainSidebar.removeClass('--extend');
	mainContent.addClass('--extend');
	mainContent.removeClass('--limit');
}

function handleCloseSidebar() {
	hideSidebar();
	btnOpenSidebar.removeClass('d-none');
	modal.addClass('--expand');
}

function handleOpenSidebar() {
	showSidebar();
	btnOpenSidebar.addClass('d-none');
	modal.removeClass('--expand');
}

function showCompanySelection() {
	if($('ul.navbar li.dropdown').length > 1) {
		$('ul.navbar').parent().addClass('navbar__select-company');
		$('ul.navbar').addClass('navbar__select-company');
	}
}
