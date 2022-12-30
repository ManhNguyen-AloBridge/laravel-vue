/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./resources/assets/js/pages/price/index.js ***!
  \**************************************************/
var btnSave = $('#btn-save-price');
var btnAdd = $('#btn-add-price');
var inputPrice = $('#field-input-price');
var inputDescription = $('#field-input-description');
btnAdd.on('click', function () {
  btnAdd.addClass('d-none');
  btnSave.removeClass('d-none');
  inputPrice.removeClass('d-none');
  inputDescription.removeClass('d-none');
});
/******/ })()
;