import { NUMBER_LIMIT } from '../../constants/cv';

export default function datatable(object) {
	object.listStaffSelected = [];
	const table = $('.datatable.dataTable').DataTable();
	const listPageSelectedAll = [];

	$(document).ready(function () {
		toggleEnableCancelBtn();
	});

	$('.datatable.dataTable')
		.on('page.dt', function () {
			if (!listPageSelectedAll.includes(table.page.info().page)) {
				$('.check-all').prop('checked', false).removeAttr('checked');
			} else {
				$('.check-all')
					.prop('checked', true)
					.attr('checked', 'checked')
					.attr('disabled', false);
			}
		})
		.dataTable();

	$('.datatable.dataTable').on('draw.dt', function () {
		handleLimitStaffSelected(object.listStaffSelected);
	});

	$('.datatable.dataTable').on('click', '.check-all', function () {
		const isSelectAll = $('.check-all').attr('checked');
		const infoTable = table.page.info();

		if (isSelectAll) {
			toggleCheckedCheckbox(false, $('.check-all'));
			toggleCheckedCheckbox(
				false,
				$('.datatable').find('.checkbox-item')
			);
			removeItemFormListStaffSelected(
				$('.datatable').find('.checkbox-item')
			);
		} else {
			setListStaffEmailSelectedAll(
				$('.datatable').find('.checkbox-item:not(:checked)')
			);
			toggleCheckedCheckbox(true, $('.check-all'));
			toggleCheckedCheckbox(true, $('.datatable').find('.checkbox-item'));
		}

		checkItemChecked();
		toggleEnableCancelBtn();

		if (!object.listStaffSelected.length > 0) {
			$('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
		} else {
			$('.btn-disable').removeClass('disabled').removeAttr('disabled');
		}

		handleLimitStaffSelected(object.listStaffSelected);
	});

	function setListStaffEmailSelectedAll(listInput) {
		const countCvSelected = object.listStaffSelected.length;
		const countItemListInput = listInput.length;
		const numberRemainingCv = NUMBER_LIMIT - countCvSelected;

		const numberRemainingCvForListInput =
			numberRemainingCv - countItemListInput;

		if (numberRemainingCvForListInput < 0) {
			const newList = listInput.slice(0, numberRemainingCv);

			return newList.map(function (index, item) {
				object.listStaffSelected.push({
					name: item.value,
					email: item.id,
				});
			});
		}

		listInput.map(function (index, item) {
			object.listStaffSelected.push({ name: item.value, email: item.id });
		});
	}

	function checkItemChecked() {
		const countItemInPage = $('.checkbox-item').length;
		const countItemChecked = $('.checkbox-item:checked').length;
		const currentPage = table.page.info().page;

		if (countItemInPage != countItemChecked) {
			if (listPageSelectedAll.includes(currentPage)) {
				listPageSelectedAll.splice(
					listPageSelectedAll.indexOf(currentPage),
					1
				);
			}
			toggleCheckedCheckbox(false, $('.datatable').find('.check-all'));
			return;
		}
		listPageSelectedAll.push(currentPage);
		toggleCheckedCheckbox(true, $('.datatable').find('.check-all'));
	}

	function toggleCheckedCheckbox(isChecked, element) {
		if ($(element).not('.check-all').length > 0) {
			const countCvSelected = object.listStaffSelected.length;
			const numberRemainingCv = NUMBER_LIMIT - countCvSelected;

			if (numberRemainingCv == 0) {
				element.each(function (index, item) {
					const emailStaffSelected =
						object.listStaffSelected[index]?.email;
					const emailItemInput = $(item).attr('id');
					const listEmailSelected = object.listStaffSelected.map(
						(item) => item.email
					);
					if (listEmailSelected.includes($(item).attr('id'))) {
						if (isChecked) {
							$(item)
								.prop('checked', true)
								.attr('checked', 'checked');
							return;
						}

						toggleCheckedElement(isChecked, $(item));
					}
				});
				return;
			}
		}

		toggleCheckedElement(isChecked, element);
	}

	function toggleCheckedElement(isChecked, element) {
		if (isChecked) {
			element.prop('checked', true).attr('checked', 'checked');
			return;
		}

		element.prop('checked', false).removeAttr('checked');
	}

	function removeItemFormListStaffSelected(listItemRemove) {
		listItemRemove.map(function (index, input) {
			object.listStaffSelected.find(function (item, index) {
				if (item.email == input.id) {
					return object.listStaffSelected.splice(index, 1);
				}
			});
		});
	}

	function unsetStaffEmailInList(email) {
		object.listStaffSelected.find(function (item, index) {
			if (item.email == email) {
				return object.listStaffSelected.splice(index, 1);
			}
		});
	}

	function toggleEnableCancelBtn() {
		if (object.listStaffSelected.length == 0) {
			$('.btn-dropdown').each((index, item) => {
				$(item).prop('disabled', true);
				$(item).addClass('--disabled');
			});

			return;
		}

		$('.btn-dropdown').each((index, item) => {
			$(item).prop('disabled', false);
			$(item).removeClass('--disabled');
		});
	}

	$('.datatable.dataTable').on('click', '.checkbox-item', function () {
		const isSelected = $(this).attr('checked');
		if (isSelected) {
			$(this).removeAttr('checked').prop('checked', false);
			unsetStaffEmailInList($(this).attr('id'));
		} else {
			$(this)
				.not('.check-all')
				.attr('checked', 'checked')
				.prop('checked', true);
			object.listStaffSelected.push({
				name: $(this).val(),
				email: $(this).attr('id'),
			});
		}

		toggleEnableCancelBtn();
		checkItemChecked();

		if (object.listStaffSelected.length > 0) {
			$('.btn-disable').removeClass('disabled').removeAttr('disabled');
		} else {
			$('.btn-disable').addClass('disabled').attr('disabled', 'disabled');
		}
		handleLimitStaffSelected(object.listStaffSelected);
	});

	return table;
}
function handleLimitStaffSelected(listStaffSelected) {
	const count = listStaffSelected.length;
	$('.datatable.dataTable').attr('count-item-selected', count);
	if (count >= NUMBER_LIMIT) {
		$('.checkbox__input').not(':checked').prop('disabled', true);
		$('#form-download .checkbox__input').prop('disabled', false);
	} else {
		$('.checkbox__input').not(':checked').prop('disabled', false);
	}
}
