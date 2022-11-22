/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/constants/regex.js":
/*!************************************************!*\
  !*** ./resources/assets/js/constants/regex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE": () => (/* binding */ DATE),
/* harmony export */   "EMAIL": () => (/* binding */ EMAIL)
/* harmony export */ });
var EMAIL = /^[a-z0-9.!#$%\\\&'*+\/=?^_`{}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var DATE = /^\d{2}\/\d{2}\/\d{4}$/;

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/separator-email-input.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./resources/assets/js/constants/regex.js");

var arrayItem = [];
$(document).ready(function () {
  $('.input-multi-email').on('keydown', function (e) {
    if (e.keyCode == 13 || e.keyCode == 13 && e.shiftKey) {
      e.preventDefault();
      $(this).attr('rows', 1);
    }
  });
  $('#body').on('keydown', function (e) {
    if (e.keyCode == 13 && e.shiftKey) {
      e.preventDefault();
    }
  });
});
$('.input-multi-email').on('click', function () {
  var vrItem = $(this).closest('.vr');
  var idInput = $(this).attr('id');
  var input = $("#".concat(idInput));
  emailSeparator(input, vrItem);
  handleFocusOutInput(input, vrItem);
});
$('.vr').on('click', function () {
  $(this).find('textarea').focus();
});
function emailSeparator(input, vrItem) {
  var idVr = $(vrItem).attr('id');
  input.keyup(function (event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      var lastEmail = input.val().split(', ').pop();
      if (isEmail(lastEmail)) {
        arrayItem.push(itemEmail(lastEmail, idVr));
        $(itemEmail(lastEmail, idVr)).insertBefore(input);
        input.val('');
      }
    }
  });
}
function handleFocusOutInput(input, vrItem) {
  var idVr = $(vrItem).attr('id');
  var defaultLastEmail = input.val().split(', ').pop();
  if (isEmail(defaultLastEmail) || defaultLastEmail == '') {
    input.focusout(function () {
      var lastEmail = input.val().split(', ').pop();
      if (isEmail(lastEmail)) {
        arrayItem.push(itemEmail(lastEmail, idVr));
        $(itemEmail(lastEmail, idVr)).insertBefore(input);
        input.val('');
      } else {
        input.val('');
      }
    });
  }
}
$('.item-email').on('click', 'span.vr__icon-remove', function () {
  $(this).parents('.vr__item').remove();
});
function itemEmail(email, item) {
  return "\n\t<span class=\"vr__item\">\n\t\t<div class=\"vr__content\">\n\t\t<span class=\"vr__email\">\n\t\t\t".concat(email, "\n\t\t</span>\n\t\t<input type=\"hidden\" name=\"").concat(item, "[]\" value=\"").concat(email, "\"/>\n\t\t<span class=\"vr__icon-remove pl-2\">\xD7</span>\n\t\t</div>\n\t</span>");
}
function isEmail(email) {
  var regex = _constants_regex__WEBPACK_IMPORTED_MODULE_0__.EMAIL;
  return regex.test(email);
}
})();

/******/ })()
;