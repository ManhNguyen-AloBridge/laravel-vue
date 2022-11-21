const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
if (process.env.BROWSER_SYNC === 'true') {
	mix.browserSync(process.env.APP_URL);
}

const src = 'resources/assets';
const des = 'public/assets';

mix.sass(`${src}/scss/app.scss`, `${des}/css`);
mix.css(
	'node_modules/daterangepicker/daterangepicker.css',
	`${des}/css/vendors`
);
mix.copyDirectory(`${src}/img`, `${des}/img`);

//// JS
mix.js(`${src}/js/app.js`, `${des}/js`);
mix.js(`${src}/js/vendors/toastr.min.js`, `${des}/js/vendors`);
mix.copy(
	`${src}/js/vendors/chart/chartjs-plugin-datalabels.js`,
	`${des}/js/vendors/chart/`
);

// PAGES
mix.js(`${src}/js/pages/auth/forgot-password.js`, `${des}/js/pages/auth`);
mix.js(`${src}/js/pages/auth/reset-password.js`, `${des}/js/pages/auth`);
mix.js(`${src}/js/pages/setting/resume.js`, `${des}/js/pages/setting`);
mix.js(`${src}/js/pages/staff/edit-cv.js`, `${des}/js/pages/staff`);
mix.js(`${src}/js/pages/staff/index.js`, `${des}/js/pages/staff`);
mix.js(`${src}/js/pages/load-chart-data.js`, `${des}/js/pages`);
mix.js(`${src}/js/pages/setting/payment.js`, `${des}/js/pages/setting`);
mix.js(`${src}/js/pages/mail/index.js`, `${des}/js/pages/mail`);
mix.js(`${src}/js/pages/staff/cv.js`, `${des}/js/pages/staff`);

// COMPONENTS
mix.js(`${src}/js/components/table-cv.js`, `${des}/js/components`);
mix.js(`${src}/js/components/format-phone.js`, `${des}/js/components`);
mix.js(`${src}/js/components/auto-format-zipcode.js`, `${des}/js/components`);
mix.js(`${src}/js/components/show-input-in-list.js`, `${des}/js/components`);
mix.js(`${src}/js/components/block-multi-click.js`, `${des}/js/components`);
mix.js(`${src}/js/components/pass-data-to-modal.js`, `${des}/js/components`);

mix.js(
	`${src}/js/components/shared/back-with-input.js`,
	`${des}/js/components/shared`
);
mix.js(`${src}/js/components/separator-email-input.js`, `${des}/js/components`);
mix.js(`${src}/js/chart.js`, `${des}/js`);

/// UI new
const srcNew = 'resources/assets_new';
const desNew = 'public/assets_new';

mix.sass(`${srcNew}/scss/app.scss`, `${desNew}/css`);

mix.copyDirectory(`${srcNew}/img`, `${desNew}/img`);
mix.copyDirectory(
	`${srcNew}/fonts/BIZUDPGothic`,
	`${desNew}/fonts/BIZUDPGothic`
);

//// JS
mix.js(`${srcNew}/js/app.js`, `${desNew}/js`);
mix.js(`${srcNew}/js/vendors/toastr.min.js`, `${desNew}/js/vendors`);
mix.copy(
	`${srcNew}/js/vendors/chart/chartjs-plugin-datalabels.js`,
	`${desNew}/js/vendors/chart/`
);

//// COMPONENTS
mix.js(
	`${srcNew}/js/components/show-input-in-table.js`,
	`${desNew}/js/components`
);
mix.js(`${srcNew}/js/components/card-table.js`, `${desNew}/js/components`);
mix.js(`${srcNew}/js/components/form-table-input.js`, `${desNew}/js/components`);
mix.js(`${srcNew}/js/components/form-table-select.js`, `${desNew}/js/components`);
mix.js(`${srcNew}/js/components/modal-delete.js`, `${desNew}/js/components`);
mix.js(`${srcNew}/js/components/tag-box.js`, `${desNew}/js/components`);
mix.js(`${srcNew}/js/components/format-phone.js`, `${desNew}/js/components`);
mix.js(
	`${srcNew}/js/components/auto-format-zipcode.js`,
	`${desNew}/js/components`
);
mix.js(
	`${srcNew}/js/components/show-input-in-list.js`,
	`${desNew}/js/components`
);
mix.js(`${srcNew}/js/components/process.js`, `${desNew}/js/components`);

//// PAGE
mix.js(`${srcNew}/js/pages/auth/forgot-password.js`, `${desNew}/js/pages/auth`);
mix.js(`${srcNew}/js/pages/auth/reset-password.js`, `${desNew}/js/pages/auth`);
mix.js(`${srcNew}/js/pages/setting/resume.js`, `${desNew}/js/pages/setting`);
mix.js(`${srcNew}/js/pages/auth/change-password.js`, `${desNew}/js/pages/auth`);
mix.js(`${srcNew}/js/pages/staff/index.js`, `${desNew}/js/pages/staff`);
mix.js(`${srcNew}/js/pages/setting/payment.js`, `${desNew}/js/pages/setting`);
mix.js(`${srcNew}/js/pages/mail/index.js`, `${desNew}/js/pages/mail`);
mix.js(`${srcNew}/js/pages/profile/index.js`, `${desNew}/js/pages/profile`);
mix.js(`${srcNew}/js/pages/setting/index.js`, `${desNew}/js/pages/setting`);
mix.js(`${srcNew}/js/pages/company/create.js`, `${desNew}/js/pages/company`);
mix.js(`${srcNew}/js/pages/staff/create.js`, `${desNew}/js/pages/staff`);
mix.js(`${srcNew}/js/pages/register/index.js`, `${desNew}/js/pages/register`);
mix.js(`${srcNew}/js/pages/staff/show.js`, `${desNew}/js/pages/staff`);
mix.js(`${srcNew}/js/pages/company/detail.js`, `${desNew}/js/pages/company`);
mix.js(`${srcNew}/js/pages/price/index.js`, `${desNew}/js/pages/price`);
mix.js(`${srcNew}/js/pages/user/index.js`, `${desNew}/js/pages/user`);
mix.js(`${srcNew}/js/pages/user/detail.js`, `${desNew}/js/pages/user`);
mix.js(
	`${srcNew}/js/pages/maintenance/index.js`,
	`${desNew}/js/pages/maintenance`
);
mix.js(
	`${srcNew}/js/pages/notification/index.js`,
	`${desNew}/js/pages/notification`
);
mix.js(
	`${srcNew}/js/pages/notification/edit.js`,
	`${desNew}/js/pages/notification`
);
mix.js(
	`${srcNew}/js/pages/staff/create-confirm.js`,
	`${desNew}/js/pages/staff`
);
mix.js(
	`${srcNew}/js/pages/dashboard/index.js`,
	`${desNew}/js/pages/dashboard/index.js`
);
mix.js(`${srcNew}/js/pages/staff/edit-cv.js`, `${desNew}/js/pages/staff`);
mix.js(
	`${srcNew}/js/pages/staff/edit-cv-confirm.js`,
	`${desNew}/js/pages/staff`
);
mix.js(
	`${srcNew}/js/pages/invitation-code/index.js`,
	`${desNew}/js/pages/invitation-code`
);

mix.version();
