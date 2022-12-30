/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/components/shared/data-table.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/shared/data-table.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ datatable)
/* harmony export */ });
/* harmony import */ var _constants_cv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/cv */ "./resources/assets/js/constants/cv.js");

function datatable(object) {
  object.listStaffSelected = [];
  var table = $('.datatable.dataTable').DataTable();
  var listPageSelectedAll = [];
  $(document).ready(function () {
    toggleEnableCancelBtn();
  });
  $('.datatable.dataTable').on('page.dt', function () {
    if (!listPageSelectedAll.includes(table.page.info().page)) {
      $('.check-all').prop('checked', false).removeAttr('checked');
    } else {
      $('.check-all').prop('checked', true).attr('checked', 'checked').attr('disabled', false);
    }
  }).dataTable();
  $('.datatable.dataTable').on('draw.dt', function () {
    handleLimitStaffSelected(object.listStaffSelected);
  });
  $('.datatable.dataTable').on('click', '.check-all', function () {
    var isSelectAll = $('.check-all').attr('checked');
    var infoTable = table.page.info();
    if (isSelectAll) {
      toggleCheckedCheckbox(false, $('.check-all'));
      toggleCheckedCheckbox(false, $('.datatable').find('.checkbox-item'));
      removeItemFormListStaffSelected($('.datatable').find('.checkbox-item'));
    } else {
      setListStaffEmailSelectedAll($('.datatable').find('.checkbox-item:not(:checked)'));
      toggleCheckedCheckbox(true, $('.check-all'));
      toggleCheckedCheckbox(true, $('.datatable').find('.checkbox-item'));
    }
    checkItemChecked();
    toggleEnableCancelBtn();
    if (!object.listStaffSelected.length > 0) {
      $('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
    } else {
      $('.btn-disable').removeClass('disabled').removeAttr('disabled');
    }
    handleLimitStaffSelected(object.listStaffSelected);
  });
  function setListStaffEmailSelectedAll(listInput) {
    var countCvSelected = object.listStaffSelected.length;
    var countItemListInput = listInput.length;
    var numberRemainingCv = _constants_cv__WEBPACK_IMPORTED_MODULE_0__.NUMBER_LIMIT - countCvSelected;
    var numberRemainingCvForListInput = numberRemainingCv - countItemListInput;
    if (numberRemainingCvForListInput < 0) {
      var newList = listInput.slice(0, numberRemainingCv);
      return newList.map(function (index, item) {
        object.listStaffSelected.push({
          name: item.value,
          email: item.id
        });
      });
    }
    listInput.map(function (index, item) {
      object.listStaffSelected.push({
        name: item.value,
        email: item.id
      });
    });
  }
  function checkItemChecked() {
    var countItemInPage = $('.checkbox-item').length;
    var countItemChecked = $('.checkbox-item:checked').length;
    var currentPage = table.page.info().page;
    if (countItemInPage != countItemChecked) {
      if (listPageSelectedAll.includes(currentPage)) {
        listPageSelectedAll.splice(listPageSelectedAll.indexOf(currentPage), 1);
      }
      toggleCheckedCheckbox(false, $('.datatable').find('.check-all'));
      return;
    }
    listPageSelectedAll.push(currentPage);
    toggleCheckedCheckbox(true, $('.datatable').find('.check-all'));
  }
  function toggleCheckedCheckbox(isChecked, element) {
    if ($(element).not('.check-all').length > 0) {
      var countCvSelected = object.listStaffSelected.length;
      var numberRemainingCv = _constants_cv__WEBPACK_IMPORTED_MODULE_0__.NUMBER_LIMIT - countCvSelected;
      if (numberRemainingCv == 0) {
        element.each(function (index, item) {
          var _object$listStaffSele;
          var emailStaffSelected = (_object$listStaffSele = object.listStaffSelected[index]) === null || _object$listStaffSele === void 0 ? void 0 : _object$listStaffSele.email;
          var emailItemInput = $(item).attr('id');
          var listEmailSelected = object.listStaffSelected.map(function (item) {
            return item.email;
          });
          if (listEmailSelected.includes($(item).attr('id'))) {
            if (isChecked) {
              $(item).prop('checked', true).attr('checked', 'checked');
              return;
            }
            toggleCheckedElement(isChecked, $(item));
          }
        });
        return;
      }
    }
    toggleCheckedElement(isChecked, element);
  }
  function toggleCheckedElement(isChecked, element) {
    if (isChecked) {
      element.prop('checked', true).attr('checked', 'checked');
      return;
    }
    element.prop('checked', false).removeAttr('checked');
  }
  function removeItemFormListStaffSelected(listItemRemove) {
    listItemRemove.map(function (index, input) {
      object.listStaffSelected.find(function (item, index) {
        if (item.email == input.id) {
          return object.listStaffSelected.splice(index, 1);
        }
      });
    });
  }
  function unsetStaffEmailInList(email) {
    object.listStaffSelected.find(function (item, index) {
      if (item.email == email) {
        return object.listStaffSelected.splice(index, 1);
      }
    });
  }
  function toggleEnableCancelBtn() {
    if (object.listStaffSelected.length == 0) {
      $('.btn-dropdown').each(function (index, item) {
        $(item).prop('disabled', true);
        $(item).addClass('--disabled');
      });
      return;
    }
    $('.btn-dropdown').each(function (index, item) {
      $(item).prop('disabled', false);
      $(item).removeClass('--disabled');
    });
  }
  $('.datatable.dataTable').on('click', '.checkbox-item', function () {
    var isSelected = $(this).attr('checked');
    if (isSelected) {
      $(this).removeAttr('checked').prop('checked', false);
      unsetStaffEmailInList($(this).attr('id'));
    } else {
      $(this).not('.check-all').attr('checked', 'checked').prop('checked', true);
      object.listStaffSelected.push({
        name: $(this).val(),
        email: $(this).attr('id')
      });
    }
    toggleEnableCancelBtn();
    checkItemChecked();
    if (object.listStaffSelected.length > 0) {
      $('.btn-disable').removeClass('disabled').removeAttr('disabled');
    } else {
      $('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
    }
    handleLimitStaffSelected(object.listStaffSelected);
  });
  return table;
}
function handleLimitStaffSelected(listStaffSelected) {
  var count = listStaffSelected.length;
  $('.datatable.dataTable').attr('count-item-selected', count);
  if (count >= _constants_cv__WEBPACK_IMPORTED_MODULE_0__.NUMBER_LIMIT) {
    $('.checkbox__input').not(':checked').prop('disabled', true);
    $('#form-download .checkbox__input').prop('disabled', false);
  } else {
    $('.checkbox__input').not(':checked').prop('disabled', false);
  }
}

/***/ }),

/***/ "./resources/assets/js/components/shared/loading.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/shared/loading.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Loading = /*#__PURE__*/function () {
  function Loading() {
    _classCallCheck(this, Loading);
    _defineProperty(this, "hostElement", void 0);
    _defineProperty(this, "bounce", void 0);
    this.hostElement = document.querySelector('#loading');
  }
  _createClass(Loading, [{
    key: "show",
    value: function show() {
      this.hostElement.classList.add('--show');
    }
  }, {
    key: "hide",
    value: function hide(delay) {
      var _this = this;
      if (this.bounce) {
        clearTimeout(this.bounce);
      }
      this.bounce = setTimeout(function () {
        _this.hostElement.classList.remove('--show');
      }, delay === undefined ? delay : 500);
    }
  }]);
  return Loading;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Loading());

/***/ }),

/***/ "./resources/assets/js/constants/cv.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/constants/cv.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUMBER_LIMIT": () => (/* binding */ NUMBER_LIMIT)
/* harmony export */ });
var NUMBER_LIMIT = 50;

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
/*!**************************************************!*\
  !*** ./resources/assets/js/pages/staff/index.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_shared_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/data-table */ "./resources/assets/js/components/shared/data-table.js");
/* harmony import */ var _components_shared_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/loading */ "./resources/assets/js/components/shared/loading.js");


var data = {};
(0,_components_shared_data_table__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
$(document).ready(function () {
  $('input[type=checkbox]').prop('checked', false).removeAttr('checked');
  setWidthItemOptionSelect2();
  $('a.link-detail').on('click', function () {
    _components_shared_loading__WEBPACK_IMPORTED_MODULE_1__["default"].show();
  });
  $('#btn-search').on('click', function () {
    _components_shared_loading__WEBPACK_IMPORTED_MODULE_1__["default"].show();
    setTimeout(function () {
      _components_shared_loading__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
    }, 1000);
  });
});
$('.select-normal').on('change', function () {
  if ($(this).val() == '') $(this).addClass('empty');else $(this).removeClass('empty');
});
$('.select-normal').trigger('change');
$('#is-hidden').on('click', function () {
  var isChecked = $(this).attr('checked');
  if (!isChecked) {
    return;
  }
  toggleCheckedCheckbox(isChecked, !$(this));
});
$('#form-download').on('submit', function () {
  _components_shared_loading__WEBPACK_IMPORTED_MODULE_1__["default"].hide();
  $('#download-cv-modal').modal('hide');
});
$('.datatable.dataTable').on('click', '.detail-staff-submit', function () {
  var form = $(this).closest('form')[0];
  $(form).submit();
});
function renderInputStaffEmail(isSendMail) {
  var areaRenderEmail = isSendMail ? $('#list-input-mail-send') : $('#list-input-mail-download');
  var listNameStaff = '';
  removeListNameDownload();
  data.listStaffSelected.forEach(function (item) {
    if (!isSendMail) {
      listNameStaff = "".concat(listNameStaff, ", ").concat(item.name);
    }
    areaRenderEmail.append("<input type=\"hidden\" class=\"input-rendered\" name=\"list_staff_email[]\" value=\"".concat(_.escape(item.email), "\">"));
  });
  if (!isSendMail && listNameStaff.length > 0) {
    $('#list-name-staff-download').append("<p class=\"m-0\" id=\"list-name-staff\">".concat(_.escape(listNameStaff.slice(2)), "</p>"));
  }
}
$('#send-cv-selected').on('submit', function () {
  var isSendMail = true;
  renderInputStaffEmail(isSendMail);
});
$('#download-cv-selected').on('click', function () {
  removeListInputDataDownload();
  var isChecked = $(this).attr('is-name-hidden');
  var isSendMail = false;
  renderInputStaffEmail(isSendMail);
  toggleCheckedCheckbox(isChecked, $('#is-hidden'));
});
function removeListNameDownload() {
  $('#list-name-staff').remove();
}
function removeListInputDataDownload() {
  $('.input-rendered').remove();
}
function toggleCheckedCheckbox(isChecked, element) {
  if (isChecked) {
    element.prop('checked', true).attr('checked', 'checked');
    return;
  }
  element.prop('checked', false).removeAttr('checked');
}
$('.select2').on('select2:select', function (e) {
  setWidthItemOptionSelect2();
});
function setWidthItemOptionSelect2() {
  var widthSelectAndOrOption = $('.select-box.--input.select-and-or__option')[0].offsetWidth;
  var widthForLiTag = $('.select-box.--input.form__control')[0].offsetWidth - widthSelectAndOrOption - 10;
  $.each($('.select2.select2-container').find('ul'), function (key, ulElement) {
    $(ulElement).find('li').attr('style', "max-width:".concat(widthForLiTag, "px !important"));
  });
}
})();

/******/ })()
;