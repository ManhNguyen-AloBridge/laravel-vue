/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************************!*\
  !*** ./resources/assets/js/pages/auth/reset-password.js ***!
  \**********************************************************/
$('#submit-form').on('click', function () {
  $('.alert.text-danger').addClass('d-none');
  $('.alert.text-danger').text('');
  $('.form-control').removeClass('is-invalid');
  var token = $("input[name='token']").val();
  var email = $("input[name='email']").val();
  var password = $("input[name='password']").val();
  var password_confirmation = $("input[name='password_confirmation']").val();
  var url = $('#form-reset').attr('action');
  axios.post(url, {
    token: token,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }).then(function (response) {
    $('#modal-confirm').modal('show');
  })["catch"](function (error) {
    var errors = error.response.data.errors;
    handleErrors(errors);
  });
});
function handleErrors(errors) {
  if (errors['messages']) {
    $('#error-handle').text(errors['messages']);
    $('#error-handle').removeClass('d-none');
  }
  for (var key in errors) {
    if (errors[key]) {
      var error = "#error-".concat(key);
      var idError = error.replace('_', '-');
      var idInput = "#".concat(key);
      $(idInput).addClass('is-invalid');
      $(idError).text(errors[key][0]);
      $(idError).removeClass('d-none');
    }
  }
}
$('#modal-confirm').on('hidden.bs.modal', function () {
  window.location.href = 'login';
});
/******/ })()
;