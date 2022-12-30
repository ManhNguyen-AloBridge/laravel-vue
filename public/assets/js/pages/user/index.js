/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./resources/assets/js/pages/user/index.js ***!
  \*************************************************/
var formDelete = $('form[modal-id=confirm-delete-user]');
var btnConfirmDelete = $('.btn-confirm-delete');
btnConfirmDelete.on('click', function () {
  var idItem = $(this).attr('id-item');
  var itemParent = $(this).parent().parent();
  var code = $(itemParent.find('p[key-value=code]')[0]).text();
  var messageText = i18next.t('pages.invitation-code.confirm_delete_code').replace(':code', code);
  formDelete.find('#msg-confirm-delete').text(messageText);
  formDelete.attr('action', formDelete.attr('action').replace('id', idItem));
});
/******/ })()
;