/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/staff/create.js ***!
  \***************************************************/
$(document).ready(function () {
  $('.btns-gender .btn-gender input').map(function (index, item) {
    if ($(item).is(':checked')) {
      changeColorButtonGender(item);
    }
  });
});
$('select option[value=""]').prop('disabled', true);
$('select').change(function () {
  $(this).removeClass('color-light');
});
$('.btn-gender').on('click', function () {
  removeCheckedCheckboxGender();
  $($(this).children()[0]).prop('checked', true);
  changeColorButtonGender($(this).children()[0]);
});
$('.buttons-action__back').on('click', function () {
  localStorage.setItem('pinned-tab', 'subscription-tab-tab');
  window.location = '/setting/company';
});
function removeCheckedCheckboxGender() {
  $('.btns-gender input').map(function (index, item) {
    $(item).prop('checked', false);
    removeColorBtnGender(item);
  });
}
function removeColorBtnGender(item) {
  $(item).parent().removeClass('--color');
}
function changeColorButtonGender(itemClick) {
  $($(itemClick).parent()[0]).addClass('--color');
}
/******/ })()
;