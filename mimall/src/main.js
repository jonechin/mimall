import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// const mock = false;
// if(mock){
//   require('./mock/api');
// }

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.prototype.$message=Message;
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login';

    } return Promise.reject(res);
  } else {

    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  let res=error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
