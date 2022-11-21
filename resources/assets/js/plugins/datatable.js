$.fn.DataTable.ext.pager.numbers_length = 5;

$('.datatable').dataTable({
    paging: true,
    searching: false,
    bLengthChange: false,
    language: i18next.t('datatable', { returnObjects: true }),

    columnDefs: [{
        "targets": 'no-sort',
        "orderable": false,
    }]
});