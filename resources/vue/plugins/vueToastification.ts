import 'vue-toastification/dist/index.css';
import { Plugin, App } from 'vue';
import { PluginOptions } from 'vue-toastification';
import { POSITION } from 'vue-toastification/src/ts/constants';
import Toast from 'vue-toastification';

// docs https://vue-toastification.maronato.dev/
const options: PluginOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000, //3s
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
};

const plugin: Plugin = {
  install(app: App) {
    app.use(Toast, options);
  },
};

export default plugin;
