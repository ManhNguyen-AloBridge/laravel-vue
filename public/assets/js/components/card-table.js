/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************************!*\
  !*** ./resources/assets/js/components/card-table.js ***!
  \******************************************************/
$('.card-table-data').on('click', '.btn-delete', function () {
  var objData = JSON.parse($(this).attr('item-data'));
  var formAttr = $(this).attr('data-from');
  var routeDestroy = $(this).attr('route-handle');
  $(".content-modal").remove();
  $("#".concat(formAttr)).attr('action', routeDestroy);
  contentModal = i18next.t('common.delete_setting').replace(':name', objData['name']);
  $;
  $("#content-modal-".concat(formAttr)).append("<p class=\"content-modal u-word-break-all\">".concat(_.escape(contentModal), "</p>"));
});
/******/ })()
;