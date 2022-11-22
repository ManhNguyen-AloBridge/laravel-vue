require('datatables.net/js/jquery.dataTables');

$.fn.DataTable.ext.pager.numbers_length = 5;

$('.datatable').each((index, item) => {
	const pageLength =
		$(item).attr('page-length') != '' ? $(item).attr('page-length') : 10;
	const searching = $(item).attr('searching');
	const isNotiList = $(item).attr('noti-list');
	const languageI18n = i18next.t('datatable', { returnObjects: true });

	if (isNotiList) {
		languageI18n.emptyTable = i18next.t('notification_list.emptyTable');
	}

	$(item).dataTable({
		initComplete: function () {
			$(item).wrap("<div class='u-over-flow-auto-scroll'></div>");
		},
		paging: true,
		pageLength: parseInt(pageLength),
		searching,
		bLengthChange: false,
		language: languageI18n,
		ordering: false,
		autoWidth: false,
		fixedHeader: {
			header: false,
		},

		columnDefs: [{ width: '10px', targets: 'no-sort', orderable: false }],
	});
});
