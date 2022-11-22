import { EMAIL } from '../constants/regex';

const arrayItem = [];

$(document).ready(function () {
	$('.input-multi-email').on('keydown', function (e) {
		if (e.keyCode == 13 || (e.keyCode == 13 && e.shiftKey)) {
			e.preventDefault();
			$(this).attr('rows', 1);
		}
	});
	$('#body').on('keydown', function (e) {
		if (e.keyCode == 13 && e.shiftKey) {
			e.preventDefault();
		}
	});
});

$('.input-multi-email').on('click', function () {
	const vrItem = $(this).closest('.vr');
	const idInput = $(this).attr('id');
	const input = $(`#${idInput}`);

	emailSeparator(input, vrItem);
	handleFocusOutInput(input, vrItem);
});

$('.vr').on('click', function () {
	$(this).find('textarea').focus();
});

function emailSeparator(input, vrItem) {
	const idVr = $(vrItem).attr('id');

	input.keyup(function (event) {
		if (event.keyCode === 32 || event.keyCode === 13) {
			const lastEmail = input.val().split(', ').pop();

			if (isEmail(lastEmail)) {
				arrayItem.push(itemEmail(lastEmail, idVr));
				$(itemEmail(lastEmail, idVr)).insertBefore(input);
				input.val('');
			}
		}
	});
}

function handleFocusOutInput(input, vrItem) {
	const idVr = $(vrItem).attr('id');
	const defaultLastEmail = input.val().split(', ').pop();

	if (isEmail(defaultLastEmail) || defaultLastEmail == '') {
		input.focusout(function () {
			const lastEmail = input.val().split(', ').pop();

			if (isEmail(lastEmail)) {
				arrayItem.push(itemEmail(lastEmail, idVr));
				$(itemEmail(lastEmail, idVr)).insertBefore(input);
				input.val('');
			} else {
				input.val('');
			}
		});
	}
}

$('.item-email').on('click', 'span.vr__icon-remove', function () {
	$(this).parents('.vr__item').remove();
});

function itemEmail(email, item) {
	return `
	<span class="vr__item">
		<div class="vr__content">
		<span class="vr__email">
			${email}
		</span>
		<input type="hidden" name="${item}[]" value="${email}"/>
		<span class="vr__icon-remove pl-2">×</span>
		</div>
	</span>`;
}

function isEmail(email) {
	const regex = EMAIL;
	return regex.test(email);
}
