import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// const mock = false;
// if(mock){
//   require('./mock/api');
// }
Vue.use(VueAxios,axios)
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;

axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#login';
  }else{
    alert(res.msg);
  }
})

Vue.config.productionTip=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
