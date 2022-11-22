/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./resources/assets_new/js/pages/setting/index.js ***!
  \********************************************************/
$('.tag').on('click', '.btn-delete', function () {
  var objData = JSON.parse($(this).attr('item-data'));
  var formAttr = $(this).attr('data-bs-from');
  var routeDestroy = $(this).attr('route-handle');
  $(".content-modal").remove();
  $("#".concat(formAttr)).attr('action', routeDestroy);
  contentModal = i18next.t('common.delete_setting').replace(':name', objData['name']);
  $;
  $("#content-modal-".concat(formAttr)).append("<p class=\"content-modal u-word-break-all text-md\">".concat(_.escape(contentModal), "</p>"));
});
/******/ })()
;