require('./bootstrap');

import 'admin-lte/plugins/bootstrap/js/bootstrap.min.js';
import 'admin-lte/plugins/datatables/jquery.dataTables.min.js';
import 'admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import 'admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import 'admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import 'admin-lte/plugins/daterangepicker/daterangepicker';
import 'admin-lte/plugins/select2/js/select2.full';

import './plugins/i18next';
import datepicker from './plugins/datepicker';
import select2 from './plugins/select2';

require('./vendors/summernote-bs4');
require('./components/shared/search-form');
require('./components/shared/toastr');
require('./components/shared/back-with-input');
require('./components/separator-email-input');
require('./components/modal-send-mail');
require('./components/shared/validation-error');
require('./plugins/datatable');

datepicker();
select2();
