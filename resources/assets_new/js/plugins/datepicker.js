require('daterangepicker/daterangepicker');
import { DATE_FORMAT } from '../constants/datetime';
export default (applyCallback) => {
	$('.date-picker').attr('autocomplete', 'off');
	$('input.date-picker:not([readonly])')
		.daterangepicker({
			singleDatePicker: true,
			showDropdowns: true,
			autoUpdateInput: false,
			locale: {
				format: DATE_FORMAT,
				daysOfWeek: i18next.t('daysOfWeek', { returnObjects: true }),
				monthNames: i18next.t('monthNames', { returnObjects: true }),

				cancelLabel: i18next.t('dateRangePicker.cancel'),
				applyLabel: i18next.t('dateRangePicker.accept'),
			},
		})
		.on('apply.daterangepicker', function (e, picker) {
			picker.element.val(
				picker.startDate.format(
					$(this)?.data('date-format') ?? picker.locale.format
				)
			);

			if (applyCallback) {
				applyCallback(this, picker);
			}
		});
};
