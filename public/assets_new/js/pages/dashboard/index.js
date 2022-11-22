/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets_new/js/components/select-checkbox.js":
/*!***************************************************************!*\
  !*** ./resources/assets_new/js/components/select-checkbox.js ***!
  \***************************************************************/
/***/ (() => {

$('.select-checkbox').on('click', function (e) {
  $(this).find('.select-checkbox__list').show();
});
$('.select-checkbox__item input[type=checkbox]').on('click', function (e) {
  var checked = $(this).prop('checked');
  $(this).closest('.select-checkbox__item').toggleClass('--selected', checked);
});
$('.select-checkbox__item input[data-select="all"]').on('click', function (e) {
  var checked = $(this).prop('checked');
  $(this).closest('.select-checkbox').find('input').prop('checked', checked);
  $(this).closest('.select-checkbox').find('li').removeClass('--selected').toggleClass('--selected', checked);
});
$(document).on('click', function (e) {
  var selectCheckboxElement = e.target.closest('.select-checkbox');
  if (!selectCheckboxElement) {
    $('.select-checkbox__list').hide();
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************!*\
  !*** ./resources/assets_new/js/pages/dashboard/index.js ***!
  \**********************************************************/
__webpack_require__(/*! ../../components/select-checkbox */ "./resources/assets_new/js/components/select-checkbox.js");
})();

/******/ })()
;