/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets_new/js/constants/regex.js":
/*!****************************************************!*\
  !*** ./resources/assets_new/js/constants/regex.js ***!
  \****************************************************/
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
/*!*******************************************************!*\
  !*** ./resources/assets_new/js/components/tag-box.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/regex */ "./resources/assets_new/js/constants/regex.js");

var arrayItem = [];
$(document).ready(function () {
  $('.input-tag').on('keydown', function (e) {
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
  handleRemoveTextarea();
});
$('.input-tag').on('click', function () {
  var tagItem = $(this).closest('.tag-box');
  var idInput = $(this).attr('id');
  var input = $("#".concat(idInput));
  tagSeparator(input, tagItem);
  handleFocusOutInput(input, tagItem);
});
$('.tag-box').on('click', function () {
  handleShowTextarea($(this));
  $(this).find('textarea').focus();
  handleFocusOutInput($(this).find('textarea'), $(this));
});
function handleRemoveTextarea() {
  $('.tag-box').each(function (index, item) {
    if ($(item).height() > 50) {
      $(item).find('textarea').attr('style', 'width:0;opacity:0;display:none');
    }
  });
}
function handleShowTextarea(item) {
  item.find('.tag-box__input.input-tag').removeAttr('style');
}
function tagSeparator(input, tagItem) {
  var idTag = $(tagItem).attr('id');
  input.keyup(function (event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      var lastEmail = input.val().split(', ').pop();
      if (event.keyCode === 32) {
        lastEmail = lastEmail.slice(0, -1);
      }
      if (isEmail(lastEmail)) {
        var _input$data;
        var tagClass = (_input$data = input.data('tag-class')) !== null && _input$data !== void 0 ? _input$data : '';
        var tagMarkup = itemTag(lastEmail, idTag, tagClass);
        arrayItem.push(tagMarkup);
        $(tagMarkup).insertBefore(input);
        input.val('');
      }
    }
  });
}
function handleFocusOutInput(input, tagItem) {
  var idTag = $(tagItem).attr('id');
  var defaultLastEmail = input.val().split(', ').pop();
  if (isEmail(defaultLastEmail) || defaultLastEmail == '') {
    input.focusout(function () {
      var lastEmail = input.val().split(', ').pop();
      handleRemoveTextarea();
      if (isEmail(lastEmail)) {
        var _input$data2;
        var tagClass = (_input$data2 = input.data('tag-class')) !== null && _input$data2 !== void 0 ? _input$data2 : '';
        var tagMarkup = itemTag(lastEmail, idTag, tagClass);
        arrayItem.push(tagMarkup);
        $(tagMarkup).insertBefore(input);
        input.val('');
      } else {
        input.val('');
      }
    });
  }
}
$('.tag-box').on('click', 'span.tag__icon-remove', function () {
  $(this).parents('.tag').remove();
});
function itemTag(content, name) {
  var tagClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return "\n\t\t<div class=\"tag ".concat(tagClass, "\">\n\t\t\t<span class=\"tag__content\">\n\t\t\t\t").concat(_.escape(content), "\n\t\t\t</span>\n\t\t\t<input type=\"hidden\" name=\"").concat(_.escape(name), "[]\" value=\"").concat(_.escape(content), "\"/>\n\t\t\t<span class=\"tag__icon-remove pl-2\">\xD7</span>\n\t\t</div>");
}
function isEmail(email) {
  var regex = _constants_regex__WEBPACK_IMPORTED_MODULE_0__.EMAIL;
  return regex.test(email);
}
})();

/******/ })()
;