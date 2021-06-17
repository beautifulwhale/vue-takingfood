import Vue from "vue";
import { Button } from 'mint-ui';
import App from "./App";
import router from "./router";
import VueLazyload from 'vue-lazyload'
import store from './store'
//加载mockServer
import './mock/index'
import loadimage from './common/imgs/loading.gif'

import './filter/index' //加载过滤器
Vue.use(VueLazyload, {  //有了lazy指令
  loading: loadimage,
})

Vue.component(Button.name, Button);


new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
});
