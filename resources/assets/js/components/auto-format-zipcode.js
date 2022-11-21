const inputZipcode = $('.input-zipcode');

inputZipcode.on('keyup', function () {
	const zipcode = $(this);
	inputZipcode.val(zipcodeFormat(zipcode.val()));
});
inputZipcode.val(zipcodeFormat(inputZipcode.val()));

function zipcodeFormat(input) {
	input = input.replace(/\D/g, '');

	input = input.substring(0, 7);

	const size = input.length;
	if (size == 0) {
		input = input;
	} else if (size < 4) {
		input = '〒' + input;
	} else if (size < 8) {
		input = '〒' + input.substring(0, 3) + '-' + input.substring(3, 7);
	}
	return input;
}
