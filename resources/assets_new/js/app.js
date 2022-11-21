require('./bootstrap');
require('bootstrap/dist/js/bootstrap');

import 'admin-lte/plugins/daterangepicker/daterangepicker';
import './plugins/i18next';
require('./plugins/datatable');
import datepicker from './plugins/datepicker';
import datetimepicker from './plugins/datetimepicker';
import select2 from './plugins/select2';

require('./components/shared/search-form');
require('./components/shared/toastr');
require('./components/auto-format-zipcode');
require('./components/format-phone');
require('./components/shared/back-with-input');
require('./components/shared/prevent-multi-click');
require('./components/shared/checkbox-round');
require('./components/shared/tabs');
require('./components/shared/nav');
require('./components/shared/data-table');
require('./layout/header');
require('./layout/handle-before');

select2();
datetimepicker();
datepicker();
