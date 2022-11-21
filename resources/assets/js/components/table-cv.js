const resizeIt = function (input, keyCode) {
	var str = $(input).val();
	var cols = $(input).cols;

	const lines = str.split('\n');
	let lineCount = lines.length + (keyCode === 13);
	if (
		keyCode === 8 &&
		lines[lines.length - 1].length === 0 &&
		lineCount > 1
	) {
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
