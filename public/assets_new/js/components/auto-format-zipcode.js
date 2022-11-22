/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ./resources/assets_new/js/components/auto-format-zipcode.js ***!
  \*******************************************************************/
var inputZipcode = $('.input-zipcode');
inputZipcode.on('keyup', function () {
  var zipcode = $(this);
  inputZipcode.val(zipcodeFormat(zipcode.val()));
});
inputZipcode.val(zipcodeFormat(inputZipcode.val()));
function zipcodeFormat(input) {
  var _input, _input2;
  input = (_input = input) === null || _input === void 0 ? void 0 : _input.replace(/\D/g, '').substring(0, 7);
  var size = (_input2 = input) === null || _input2 === void 0 ? void 0 : _input2.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = '〒' + input;
  } else if (size < 8) {
    input = '〒' + input.substring(0, 3) + '-' + input.substring(3, 7);
  }
  return input;
}
/******/ })()
;