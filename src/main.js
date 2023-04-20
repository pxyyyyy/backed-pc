import Vue from 'vue'
import App from './App.vue'

// 全局引用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 局部引用
// import { Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Button)

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
