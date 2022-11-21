import en from '../i18n/en.json';
import ja from '../i18n/ja.json';
import i18next from '../vendors/i18next.min';

i18next.init({
	lng: 'ja',
	async: true,
	resources: {
		en: {
			translation: en,
		},
		ja: {
			translation: ja,
		},
	},
});

window.i18next = i18next;
