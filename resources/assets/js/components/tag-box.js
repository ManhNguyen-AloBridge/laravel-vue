import { EMAIL } from '../constants/regex';
const arrayItem = [];

$(document).ready(function () {
	$('.input-tag').on('keydown', function (e) {
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

	handleRemoveTextarea();
});

$('.input-tag').on('click', function () {
	const tagItem = $(this).closest('.tag-box');
	const idInput = $(this).attr('id');
	const input = $(`#${idInput}`);

	tagSeparator(input, tagItem);
	handleFocusOutInput(input, tagItem);
});

$('.tag-box').on('click', function () {
	handleShowTextarea($(this));
	$(this).find('textarea').focus();
	handleFocusOutInput($(this).find('textarea'), $(this));
});

function handleRemoveTextarea() {
	$('.tag-box').each(function (index, item) {
		if ($(item).height() > 50) {
			$(item)
				.find('textarea')
				.attr('style', 'width:0;opacity:0;display:none');
		}
	});
}

function handleShowTextarea(item) {
	item.find('.tag-box__input.input-tag').removeAttr('style');
}

function tagSeparator(input, tagItem) {
	const idTag = $(tagItem).attr('id');

	input.keyup(function (event) {
		if (event.keyCode === 32 || event.keyCode === 13) {
			let lastEmail = input.val().split(', ').pop();

			if (event.keyCode === 32) {
				lastEmail = lastEmail.slice(0, -1);
			}

			if (isEmail(lastEmail)) {
				const tagClass = input.data('tag-class') ?? '';
				const tagMarkup = itemTag(lastEmail, idTag, tagClass);
				arrayItem.push(tagMarkup);
				$(tagMarkup).insertBefore(input);
				input.val('');
			}
		}
	});
}

function handleFocusOutInput(input, tagItem) {
	const idTag = $(tagItem).attr('id');
	const defaultLastEmail = input.val().split(', ').pop();

	if (isEmail(defaultLastEmail) || defaultLastEmail == '') {
		input.focusout(function () {
			const lastEmail = input.val().split(', ').pop();
			handleRemoveTextarea();
			if (isEmail(lastEmail)) {
				const tagClass = input.data('tag-class') ?? '';
				const tagMarkup = itemTag(lastEmail, idTag, tagClass);
				arrayItem.push(tagMarkup);
				$(tagMarkup).insertBefore(input);
				input.val('');
			} else {
				input.val('');
			}
		});
	}
}

$('.tag-box').on('click', 'span.tag__icon-remove', function () {
	$(this).parents('.tag').remove();
});

function itemTag(content, name, tagClass = '') {
	return `
		<div class="tag ${tagClass}">
			<span class="tag__content">
				${_.escape(content)}
			</span>
			<input type="hidden" name="${_.escape(name)}[]" value="${_.escape(content)}"/>
			<span class="tag__icon-remove pl-2">×</span>
		</div>`;
}

function isEmail(email) {
	const regex = EMAIL;
	return regex.test(email);
}
