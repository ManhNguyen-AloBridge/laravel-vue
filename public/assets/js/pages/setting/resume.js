/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/setting/resume.js ***!
  \*****************************************************/
$('.btn-use-template').on('click', function () {
  $("input[name='template_name']").val($(this).data('name'));
  $("input[name='template_id']").val($(this).data('id'));
  $('#modal-select-template').modal('hide');
});
$('#btn-select-template').on('click', function () {
  $('#modal-select-template').modal('show');
});
/******/ })()
;