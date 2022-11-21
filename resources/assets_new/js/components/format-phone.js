const inputPhone = $('.input-phone');

inputPhone.on('keyup', function () {
	const phoneNumber = $(this);
	phoneNumber.val(phoneFormat(phoneNumber.val()));
});
inputPhone.val(phoneFormat(inputPhone.val()));

function phoneFormat(input) {
	input = input?.replace(/\D/g, '')?.substring(0, 15);
	const size = input?.length ?? 0;

	if (size == 0) {
		input = input;
	} else if (size < 4) {
		input = input;
	} else if (size <= 7) {
		input = input.substring(0, 3) + '-' + input.substring(3, 7);
	} else {
		input =
			input.substring(0, 3) +
			'-' +
			input.substring(3, 7) +
			'-' +
			input.substring(7, 11);
	}
	return input;
}
