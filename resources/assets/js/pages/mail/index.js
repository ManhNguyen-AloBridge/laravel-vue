import { getRepository } from '../../repositories/repository-factory';

const userRepository = getRepository('user');

(async function () {
	const data = await userRepository.getAll();
	const { users: dataUsers } = data.data;

	$(document).on('click', function (e) {
		handleInputSearch(dataUsers, $(e.target).attr('class'));
	});

	$('#input-search').on('keyup', function () {
		handleDataSearch(dataUsers, $(this));
	});

	$('.suggest-search').on('click', '.suggest-search__item', function () {
		addItemSelected($(this));
		removeItemSelected($(this).attr('data-email'));
	});

	$('#is-hidden-name-sending').on('change', function () {
		const isChecked = $(this).attr('checked');

		if (isChecked) {
			$(this).removeAttr('checked').prop('checked', false);
		} else {
			$(this).attr('checked', 'checked').prop('checked', true);
		}
	});
})();

function handleInputSearch(dataUsers, classItem) {
	if (classItem.includes('suggest-search__input')) {
		handleDataSearch(dataUsers, $('#input-search'));
	} else {
		$('.suggest-search__item').addClass('d-none');
	}
}

function handleDataSearch(dataUsers, item) {
	$('.suggest-search__item').remove();
	const arraySearch = handleDataSearchUnSelected(dataUsers);
	const keyWord = $(item).val();
	renderSuggestSearch(arraySearch, keyWord);
}

function renderSuggestSearch(arrayData, keyWord) {
	const listResult = [];

	arrayData.forEach(function (item) {
		if (
			(item.first_name != null &&
				item.first_name.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.last_name != null &&
				item.last_name.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.first_name_kana != null &&
				item.first_name_kana.toLowerCase().indexOf(keyWord) >= 0) ||
			(item.last_name_kana != null &&
				item.last_name_kana.toLowerCase().indexOf(keyWord) >= 0)
		) {
			const space =
				item.last_name && item.first_name
					? i18next.t('common.space')
					: '';
			const nameStaff =
				_.escape(item.last_name) + space + _.escape(item.first_name);

			listResult.push(`
					<li class="suggest-search__item pl-2" data-email="${_.escape(
						item.email
					)}" data-name="${nameStaff}">${nameStaff}</li>
					`);
		}
	});

	$('#suggest-search').append(listResult);
}

function handleDataSearchUnSelected(data) {
	const emailSelected = [];
	const arrayEmail = [];

	$('.item-email')
		.find('.user-selected')
		.map(function (index, item) {
			return emailSelected.push(item.value);
		});

	data.forEach(function (item) {
		if (!emailSelected.includes(item.email)) {
			arrayEmail.push(item);
		}
	});

	return arrayEmail;
}

function removeItemSelected(email) {
	$(`[data-email='${email}']`).remove();
}

function addItemSelected(item) {
	const nameStaff = _.escape($(item).attr('data-name'));
	const email = _.escape($(item).attr('data-email'));
	$(`
	<span class="vr__item">
		<span class="">
			${nameStaff}
		</span>
		<input class="user-selected" type="hidden" name="staffs_email[]" value="${email}">
		<span class="vr__icon-remove pl-2">×</span>
</span>`).insertBefore('#end-item');
}
