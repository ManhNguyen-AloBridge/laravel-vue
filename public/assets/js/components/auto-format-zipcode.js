/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/auto-format-zipcode.js ***!
  \***************************************************************/
var inputZipcode = $('.input-zipcode');
inputZipcode.on('keyup', function () {
  var zipcode = $(this);
  inputZipcode.val(zipcodeFormat(zipcode.val()));
});
inputZipcode.val(zipcodeFormat(inputZipcode.val()));
function zipcodeFormat(input) {
  input = input.replace(/\D/g, '');
  input = input.substring(0, 7);
  var size = input.length;
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