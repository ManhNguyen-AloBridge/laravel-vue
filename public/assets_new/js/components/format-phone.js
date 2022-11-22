/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************************!*\
  !*** ./resources/assets_new/js/components/format-phone.js ***!
  \************************************************************/
var inputPhone = $('.input-phone');
inputPhone.on('keyup', function () {
  var phoneNumber = $(this);
  phoneNumber.val(phoneFormat(phoneNumber.val()));
});
inputPhone.val(phoneFormat(inputPhone.val()));
function phoneFormat(input) {
  var _input, _input$replace, _input$length, _input2;
  input = (_input = input) === null || _input === void 0 ? void 0 : (_input$replace = _input.replace(/\D/g, '')) === null || _input$replace === void 0 ? void 0 : _input$replace.substring(0, 15);
  var size = (_input$length = (_input2 = input) === null || _input2 === void 0 ? void 0 : _input2.length) !== null && _input$length !== void 0 ? _input$length : 0;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = input;
  } else if (size <= 7) {
    input = input.substring(0, 3) + '-' + input.substring(3, 7);
  } else {
    input = input.substring(0, 3) + '-' + input.substring(3, 7) + '-' + input.substring(7, 11);
  }
  return input;
}
/******/ })()
;