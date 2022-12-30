import datepicker from '../../plugins/datepicker';

export default () => {
	datepicker(function (context) {
		$(context)
			.closest('div')
			.find('.label-date-picker')
			.text($(context).val());
	});
};
