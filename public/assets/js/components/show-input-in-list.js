/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/show-input-in-list.js ***!
  \**************************************************************/
$('.btn-add').on('click', function () {
  var items = handleItem($(this));
  $(this).parents().parents().find('.session-error').addClass('d-none');
  handleEventClickAdd(items);
});
$('.btn-cancel').on('click', function () {
  $(this).parents().parents().find('.validation-error').addClass('d-none');
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
  items.item.closest("form[class=".concat(items.title, "]")).find('input').removeClass('d-none').addClass('d-flex flex-grow-1 w-auto').focus();
}
function handleEventClickCancel(items) {
  $(items.cancel).addClass('d-none');
  $(items.save).addClass('d-none');
  $(items.add).removeClass('d-none');
  items.item.closest("form[class=".concat(items.title, "]")).find('input[type=text]').addClass('d-none').removeClass('d-flex flex-grow-1 w-auto').val('');
}
/******/ })()
;