/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets_new/js/components/modal-delete.js":
/*!************************************************************!*\
  !*** ./resources/assets_new/js/components/modal-delete.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var modalDelete = /*#__PURE__*/function () {
  function modalDelete(self) {
    _classCallCheck(this, modalDelete);
    _defineProperty(this, "self", void 0);
    _defineProperty(this, "btnContinue", void 0);
    _defineProperty(this, "fillTextElements", void 0);
    this.self = self;
    this.btnContinue = this.self.find('.modal-footer .btn.continue');
    this.fillTextElements = this.self.find('.modal-body span.fill-text-position');
  }
  _createClass(modalDelete, [{
    key: "fillTextInDeleteMessage",
    value: function fillTextInDeleteMessage(text) {
      this.fillTextElements.text(text);
    }
  }]);
  return modalDelete;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalDelete);

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
/*!****************************************************************!*\
  !*** ./resources/assets_new/js/components/form-table-input.js ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-delete.js */ "./resources/assets_new/js/components/modal-delete.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormTableInput = /*#__PURE__*/function () {
  function FormTableInput(self, modal) {
    _classCallCheck(this, FormTableInput);
    _defineProperty(this, "self", void 0);
    _defineProperty(this, "model", void 0);
    _defineProperty(this, "modal", void 0);
    _defineProperty(this, "form", void 0);
    _defineProperty(this, "btnShowCreate", void 0);
    _defineProperty(this, "btnCreate", void 0);
    _defineProperty(this, "btnUpdate", void 0);
    _defineProperty(this, "btnCancel", void 0);
    _defineProperty(this, "addRow", void 0);
    _defineProperty(this, "btnCancelOfAddRow", void 0);
    _defineProperty(this, "editRows", void 0);
    _defineProperty(this, "prefixDeleteMessage", '');
    _defineProperty(this, "fieldDeleteMessage", 'name');
    this.self = self;
    this.modal = modal;
    this.model = this.self.attr('data-model');
    this.form = this.self.find('#form-' + this.model);
    this.btnShowCreate = self.find('.form-table__button-group button[data-button-type="show-add-button"]');
    this.btnCreate = this.self.find('.form-table__button-group button[data-button-type="add"]');
    this.btnUpdate = this.self.find('.form-table__button-group button[data-button-type="update"]');
    this.btnCancel = this.self.find('.form-table__button-group button[data-button-type="cancel"]');
    this.addRow = this.self.find('.form-table__row[data-form="add-new"]');
    this.btnCancelOfAddRow = this.addRow.find('button');
    this.editRows = this.self.find('.form-table__row:not([data-form="add-new"])');
    this.getDefaultDisplay();
    this.addButtonsEvent();
    this.addEditRowsEvent();
    this.modal.btnContinue.click(function () {
      this.submitFormDelete();
    }.bind(this));
  }
  _createClass(FormTableInput, [{
    key: "cancel",
    value: function cancel() {
      return function () {
        var oldFocus = this.getOldFocus();
        this.addRow.find('input').val('');
        if (oldFocus !== null) {
          this.backRowToOldValue(oldFocus.inputs);
          this.removeFocusInput(oldFocus.inputs);
        }
        this.removeValidateError();
        this.cancelAction();
      }.bind(this);
    }
  }, {
    key: "removeValidateError",
    value: function removeValidateError() {
      var _this$self$find;
      (_this$self$find = this.self.find('.validation-error')) === null || _this$self$find === void 0 ? void 0 : _this$self$find.each(function () {
        $(this).remove();
      });
    }
  }, {
    key: "addButtonsEvent",
    value: function addButtonsEvent() {
      this.btnShowCreate.click(this.showAdd());
      this.btnCancel.click(this.cancel());
      this.btnCancelOfAddRow.click(this.cancel());
      this.btnCreate.click(function () {
        var createUrl = this.btnCreate.attr('data-route-handle');
        this.form.attr('action', createUrl);
        this.submitFormCreate();
      }.bind(this));
      this.btnUpdate.click(this.submitFormUpdate.bind(this));
    }
  }, {
    key: "addEditRowsEvent",
    value: function addEditRowsEvent() {
      var formTable = this;
      this.editRows.each(function () {
        var btnEdit = $(this).find('button[data-control-name="edit"]');
        var btnDelete = $(this).find('button[data-control-name="delete"]');
        var rowInputs = $(this).find('input');
        var itemId = $(this).attr('data-item-id');
        btnEdit.click(function () {
          var updateUrl = btnEdit.attr('data-route-handle');
          formTable.showUpdate();
          formTable.focusInput(rowInputs);
          formTable.btnCancel.attr('data-edit-row-id', itemId);
          formTable.form.attr('data-item-id', itemId);
          formTable.form.attr('action', updateUrl);
        });
        btnDelete.click(function () {
          var deleteUrl = btnDelete.attr('data-route-handle');
          var deleteText = rowInputs.filter('[name=' + formTable.fieldDeleteMessage + ']').val();
          formTable.form.attr('action', deleteUrl);
          formTable.modal.fillTextInDeleteMessage(deleteText);
        });
      });
    }
  }, {
    key: "showAdd",
    value: function showAdd() {
      return function () {
        this.btnShowCreate.hide();
        this.btnCreate.show();
        this.btnCancel.show();
        this.addRow.show();
        var input = this.addRow.find('input').eq(1);
        var inputLength = input.val().length;
        input.first().focus();
        input.first()[0].setSelectionRange(inputLength, inputLength);
      }.bind(this);
    }
  }, {
    key: "showUpdate",
    value: function showUpdate() {
      this.btnShowCreate.hide();
      this.btnCreate.hide();
      this.btnUpdate.show();
      this.btnCancel.show();
      this.addRow.hide();
    }
  }, {
    key: "cancelAction",
    value: function cancelAction() {
      this.btnCancel.hide();
      this.btnCreate.hide();
      this.btnUpdate.hide();
      this.btnShowCreate.show();
      this.addRow.hide();
    }
  }, {
    key: "focusInput",
    value: function focusInput(inputs) {
      var oldFocus = this.getOldFocus() !== null ? this.getOldFocus() : null;
      if (oldFocus !== null) {
        this.removeFocusInput(oldFocus.inputs);
        this.backRowToOldValue(oldFocus.inputs);
      }
      inputs.closest('.form-table__row').addClass('--edit');
      inputs.prop('disabled', false);
      var inputLength = inputs.eq(1).val().length;
      inputs.eq(1).focus();
      inputs.eq(1)[0].setSelectionRange(inputLength, inputLength);
    }
  }, {
    key: "removeFocusInput",
    value: function removeFocusInput(inputs) {
      this.addRow.hide();
      inputs.prop('readonly', true);
      inputs.closest('.form-table__row').removeClass('--edit');
    }
  }, {
    key: "submitFormCreate",
    value: function submitFormCreate() {
      this.updateFormMethod('POST');
      var inputs = this.addRow.find('input').clone();
      inputs.attr('type', 'hidden');
      this.form.append(inputs);
      this.form.submit();
    }
  }, {
    key: "submitFormUpdate",
    value: function submitFormUpdate() {
      this.updateFormMethod('PUT');
      var itemId = this.form.attr('data-item-id');
      var inputsOfFocusRow = this.getEditRow(itemId).find('input');
      var inputs = inputsOfFocusRow.clone();
      inputs.attr('type', 'hidden');
      this.form.append(inputs);
      this.form.submit();
    }
  }, {
    key: "submitFormDelete",
    value: function submitFormDelete() {
      this.updateFormMethod('Delete');
      this.form.submit();
    }
  }, {
    key: "getEditRow",
    value: function getEditRow(id) {
      return this.editRows.filter(function () {
        return $(this).attr('data-item-id') == id;
      });
    }
  }, {
    key: "getDefaultDisplay",
    value: function getDefaultDisplay() {
      var editRow = this.editRows.filter(function (index, row) {
        return $(row).hasClass('--edit');
      });
      this.btnShowCreate.show();
      this.btnCreate.hide();
      this.btnUpdate.hide();
      this.btnCancel.hide();
      this.addRow.hide();
      if (this.form.parent().find('p').hasClass('validation-error')) {
        this.showAdd()();
      }
      if (editRow.length) {
        this.showUpdate();
        this.btnCancel.attr('data-edit-row-id', $(editRow[0]).data('item-id'));
        return;
      }
    }
  }, {
    key: "getOldFocus",
    value: function getOldFocus() {
      var _this$btnCancel$attr;
      var id = (_this$btnCancel$attr = this.btnCancel.attr('data-edit-row-id')) !== null && _this$btnCancel$attr !== void 0 ? _this$btnCancel$attr : null;
      if (id == null) {
        return null;
      }
      var oldFocusRow = this.getEditRow(id);
      var inputOfRow = oldFocusRow.find('input');
      var btnEditOfRow = oldFocusRow.find('.form-table__row__button-group button[data-control-name="edit"]');
      return {
        row: oldFocusRow,
        inputs: inputOfRow,
        btnEdit: btnEditOfRow
      };
    }
  }, {
    key: "backRowToOldValue",
    value: function backRowToOldValue(inputs) {
      inputs.each(function () {
        var oldValue = $(this).attr('data-origin-value');
        $(this).val(oldValue);
      });
    }
  }, {
    key: "updateFormMethod",
    value: function updateFormMethod(method) {
      this.form.find('input[name="_method"]').val(method);
    }
  }]);
  return FormTableInput;
}();
$('.card-form-table-input').each(function () {
  var formTables = $(this).find('.form-table');
  var modalElement = $(this).find('.modal');
  var modal = new _modal_delete_js__WEBPACK_IMPORTED_MODULE_0__["default"](modalElement);
  new FormTableInput(formTables, modal);
});
})();

/******/ })()
;