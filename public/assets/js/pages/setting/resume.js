/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/setting/resume.js ***!
  \*****************************************************/
$(document).ready(function () {
  var templateId = $('.input-template').attr('value');
  $("#checked-".concat(templateId)).attr('hidden', false);
  $('.img-template').on('click', function () {
    $('#modal-success').modal('show');
    $('.img-template-modal').attr('src', $(this).attr('src'));
    $('.carousel-item.active').attr('value', $(this).attr('value'));
  });
  $('.btn-save').on('click', function () {
    var id = $('.carousel-item.active').attr('value');
    $('.input-template').attr('value', id);
    $(".img-template").removeClass('--selected');
    $("#img-template-".concat(id)).addClass('--selected');
    $(".icon-check").attr('hidden', true);
    $("#checked-".concat(id)).attr('hidden', false);
  });
  $('.carousel').carousel({
    interval: false
  });
});
/******/ })()
;