import { createApp } from 'vue';
import App from './App.vue';
import i18n from './plugins/vueI18n';
import router from './router';
import { store, key } from './store';
import clickOutside from './plugins/clickOutside';
import globalComponents from './plugins/globalComponents';
import VueFlatPickr from 'vue-flatpickr-component';
import VueToastificaiton from './plugins/vueToastification';
import 'flatpickr/dist/flatpickr.css';
import './assets/scss/app.scss';

const app = createApp(App);

app
  .use(store, key)
  .use(VueToastificaiton)
  .use(i18n)
  .use(router)
  .use(globalComponents)
  .use(VueFlatPickr)
  .use(clickOutside)
  .mount('#app');
