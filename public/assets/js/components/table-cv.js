/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./resources/assets/js/components/table-cv.js ***!
  \****************************************************/
var resizeIt = function resizeIt(input, keyCode) {
  var str = $(input).val();
  var cols = $(input).cols;
  var lines = str.split('\n');
  var lineCount = lines.length + (keyCode === 13);
  if (keyCode === 8 && lines[lines.length - 1].length === 0 && lineCount > 1) {
    --lineCount;
  }
  $(input).attr('rows', lineCount);
};
$('textarea').on('keydown', function (event) {
  resizeIt(this, event.keyCode);
});
$('.table-cv td').on('click', function () {
  $(this).find('textarea').focus();
});
/******/ })()
;