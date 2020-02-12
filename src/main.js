import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import './assets/style/core.scss';
import './assets/tailwind.css';


Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
