/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/components/modal-delete.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/modal-delete.js ***!
  \********************************************************/
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
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/form-table-select.js ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-delete.js */ "./resources/assets/js/components/modal-delete.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormTableSelect = /*#__PURE__*/function () {
  function FormTableSelect(self, modal) {
    _classCallCheck(this, FormTableSelect);
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
    this.addRowSelectEvent();
    this.modal.btnContinue.click(function () {
      this.submitFormDelete();
    }.bind(this));
  }
  _createClass(FormTableSelect, [{
    key: "cancel",
    value: function cancel() {
      return function () {
        var oldFocus = this.getOldFocus();
        this.addRow.find('input').val('');
        this.addRow.find('select').val('');
        if (oldFocus !== null) {
          this.resetSelectItemOption();
          this.removeFocus(oldFocus.inputs, oldFocus.select);
          this.backRowToOldValue(oldFocus.inputs, oldFocus.select);
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
        var rowSelect = $(this).find('select');
        var itemId = $(this).attr('data-item-id');
        rowSelect.change(function () {
          var id = $(this).val();
          formTable.updateSelected(rowSelect, id);
        });
        btnEdit.click(function () {
          var updateUrl = btnEdit.attr('data-route-handle');
          formTable.showUpdate();
          formTable.focusInput(rowInputs, rowSelect);
          formTable.resetSelectItemOption();
          formTable.showSelectItemOption(rowSelect);
          formTable.btnCancel.attr('data-edit-row-id', itemId);
          formTable.form.attr('data-item-id', itemId);
          formTable.form.attr('action', updateUrl);
        });
        btnDelete.click(function () {
          var deleteUrl = btnDelete.attr('data-route-handle');
          var deleteText = rowInputs.filter('[name="skill[' + formTable.fieldDeleteMessage + ']"]').val();
          formTable.form.attr('action', deleteUrl);
          formTable.modal.fillTextInDeleteMessage(deleteText);
        });
      });
    }
  }, {
    key: "addRowSelectEvent",
    value: function addRowSelectEvent() {
      var formTable = this;
      var arrRowSelect = this.addRow.find('select');
      arrRowSelect.change(function () {
        var id = $(this).val();
        formTable.updateSelected(arrRowSelect, id);
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
        this.resetSelectItemOption();
        var input = this.addRow.find('input').first();
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
    value: function focusInput(inputs, select) {
      var oldFocus = this.getOldFocus() !== null ? this.getOldFocus() : null;
      if (oldFocus !== null) {
        this.resetSelectItemOption();
        this.removeFocus(oldFocus.inputs, oldFocus.select);
        this.backRowToOldValue(oldFocus.inputs, oldFocus.select);
      }
      inputs.closest('.form-table__row').addClass('--edit');
      inputs.prop('disabled', false);
      select.prop('disabled', false);
      var inputLength = inputs.first().val().length;
      inputs.first().focus();
      inputs.first()[0].setSelectionRange(inputLength, inputLength);
    }
  }, {
    key: "showSelectItemOption",
    value: function showSelectItemOption(select) {
      var selectItemOption = select.find('option').first();
      selectItemOption.text(i18next.t('select_option.default'));
    }
  }, {
    key: "resetSelectItemOption",
    value: function resetSelectItemOption() {
      this.self.find('select.form-table__select').each(function () {
        $(this).find('option').first().text('');
      });
      this.addRow.find('select.form-table__select option').first().text(i18next.t('select_option.default'));
    }
  }, {
    key: "removeFocus",
    value: function removeFocus(inputs, select) {
      this.addRow.hide();
      inputs.prop('disabled', true);
      select.prop('disabled', true);
      inputs.closest('.form-table__row').removeClass('--edit');
    }
  }, {
    key: "submitFormCreate",
    value: function submitFormCreate() {
      this.updateFormMethod('POST');
      var inputs = this.addRow.find('input').clone();
      var select = this.addRow.find('select').clone();
      inputs.attr('type', 'hidden');
      select.addClass('d-none');
      this.form.append(inputs);
      this.form.append(select);
      this.form.submit();
    }
  }, {
    key: "submitFormUpdate",
    value: function submitFormUpdate() {
      this.updateFormMethod('PUT');
      var itemId = this.form.attr('data-item-id');
      var inputsOfFocusRow = this.getEditRow(itemId).find('input');
      var selectOfFocusRow = this.getEditRow(itemId).find('select');
      var inputs = inputsOfFocusRow.clone();
      var select = selectOfFocusRow.clone();
      inputs.attr('type', 'hidden');
      select.addClass('d-none');
      this.form.append(inputs);
      this.form.append(select);
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
      var selectOfRow = oldFocusRow.find('select');
      var btnEditOfRow = oldFocusRow.find('.form-table__row__button-group button[data-control-name="edit"]');
      return {
        row: oldFocusRow,
        inputs: inputOfRow,
        select: selectOfRow,
        btnEdit: btnEditOfRow
      };
    }
  }, {
    key: "backRowToOldValue",
    value: function backRowToOldValue(inputs, select) {
      inputs.each(function () {
        var oldValue = $(this).attr('data-origin-value');
        $(this).val(oldValue);
      });
      var oldSelectValue = select.attr('data-origin-value');
      select.val(oldSelectValue);
    }
  }, {
    key: "updateFormMethod",
    value: function updateFormMethod(method) {
      this.form.find('input[name="_method"]').val(method);
    }
  }, {
    key: "updateSelected",
    value: function updateSelected(select, id) {
      select.find('option').each(function () {
        $(this).removeAttr('selected');
        if ($(this).attr('value') == id) {
          $(this).attr('selected', true);
        }
      });
    }
  }]);
  return FormTableSelect;
}();
$('.card-form-table-select').each(function () {
  var formTableSelects = $(this).find('.form-table');
  var modalElement = $(this).find('.modal');
  var modal = new _modal_delete_js__WEBPACK_IMPORTED_MODULE_0__["default"](modalElement);
  new FormTableSelect(formTableSelects, modal);
});
})();

/******/ })()
;