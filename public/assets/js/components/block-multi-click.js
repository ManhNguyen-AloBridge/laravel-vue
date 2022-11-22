/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/block-multi-click.js ***!
  \*************************************************************/
$('.block-multi-click').on('click', function (e) {
  if (e.detail > 1) {
    $('form').submit(function (e) {
      e.preventDefault();
    });
  }
});
/******/ })()
;