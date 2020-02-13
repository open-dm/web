import Vue from 'vue';
import './plugins/axios';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import './assets/style/core.scss';
import './assets/tailwind.css';
import router from './router';


Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
