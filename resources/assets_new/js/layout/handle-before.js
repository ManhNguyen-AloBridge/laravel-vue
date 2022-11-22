let screenWidth = window.innerWidth;
const mainSidebar = document.getElementsByClassName('main-sidebar');
const mainContent = document.getElementsByClassName('main-content');
const btnOpenSidebar = document.getElementById('btn-open-sidebar');
const btnCloseSidebar = document.getElementById('btn-close-sidebar');

window.addEventListener(
	'resize',
	function (event) {
		screenWidth = window.innerWidth;
		toggleDisplaySidebar(screenWidth);
		showHideSideBarFollowWidthScreen(screenWidth);
	},
	true
);

function toggleDisplaySidebar(screenWidth) {
	if (screenWidth > 992) {
		showSidebar();
	}

	if (screenWidth <= 992) {
		hideSidebar();
	}
}

function showHideSideBarFollowWidthScreen(screenWidth) {
	if (mainSidebar[0] == undefined) {
		return;
	}

	const classMainSidebar = mainSidebar[0].className;
	if (classMainSidebar == undefined) {
		return;
	}

	if (screenWidth > 992) {
		showSidebar();
		btnOpenSidebar.classList.add('d-none');
	}

	if (screenWidth <= 992) {
		handleCloseSidebar();
	}
}

function hideSidebar() {
	if (!mainSidebar[0]) {
		return;
	}

	mainSidebar[0].classList.add('--close');
	mainSidebar[0].classList.remove('--extend');
	mainContent[0].classList.add('--extend');
	mainContent[0].classList.remove('--limit');
}

function showSidebar() {
	if (!mainSidebar[0]) {
		return;
	}

	mainSidebar[0].classList.add('--extend');
	mainSidebar[0].classList.remove('--close');
	mainContent[0].classList.remove('--extend');
	mainContent[0].classList.add('--limit');
}

function handleCloseSidebar() {
	hideSidebar();
	btnOpenSidebar.classList.remove('d-none');
}

function handleOpenSidebar() {
	showSidebar();
	btnOpenSidebar.classList.add('d-none');
}

if (btnOpenSidebar != null) {
	btnOpenSidebar.addEventListener('click', function () {
		const isClose = mainSidebar[0].className.includes('--close');
		const dClass = mainSidebar[0].className.includes('d-none d-lg-block');

		if (dClass) {
			mainSidebar[0].classList.remove('d-none');
			mainSidebar[0].classList.remove('d-lg-block');
		}

		if (isClose) {
			handleOpenSidebar();
		}
	});
}

if (btnCloseSidebar != null) {
	btnCloseSidebar.addEventListener('click', function () {
		const isClose = mainSidebar[0].className.includes('--close');

		if (!isClose) {
			handleCloseSidebar();
		}
	});
}

toggleDisplaySidebar(screenWidth);
showHideSideBarFollowWidthScreen(screenWidth);
