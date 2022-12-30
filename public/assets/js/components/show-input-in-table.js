/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/show-input-in-table.js ***!
  \***************************************************************/
$('.btn-add').on('click', function () {
  var items = handleItem($(this));
  $(this).parents().find('.session-error').addClass('d-none');
  handleEventClickAdd(items);
});
$('.btn-cancel').on('click', function () {
  $(this).parents().find('.validation-error').addClass('d-none');
  var items = handleItem($(this));
  handleEventClickCancel(items);
});
function handleItem(item) {
  var title = item.attr('id').split('-').pop();
  var btnAdd = '#btn-add-' + title;
  var btnSave = '#btn-save-' + title;
  var btnCancel = '#btn-cancel-' + title;
  return {
    add: btnAdd,
    save: btnSave,
    cancel: btnCancel,
    title: title,
    item: item
  };
}
function handleEventClickAdd(items) {
  $(items.add).addClass('d-none');
  $(items.save).removeClass('d-none');
  $(items.cancel).removeClass('d-none');
  var formClass = $(items.item.parent()).attr('data-form');
  var form = $('.' + formClass);
  form.find('.tr-input').removeClass('d-none').find('input').focus();
}
function handleEventClickCancel(items) {
  $(items.cancel).addClass('d-none');
  $(items.save).addClass('d-none');
  $(items.add).removeClass('d-none');
  var formClass = $(items.item.parent()).attr('data-form');
  var form = $('.' + formClass);
  form.find('.tr-input').addClass('d-none').find('input').focus();
}
/******/ })()
;