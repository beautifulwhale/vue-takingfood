import Vue from "vue";
import { Button } from 'mint-ui';
import App from "./App";
import router from "./router";
import store from './store'
//加载mockServer
import './mock/index'

Vue.component(Button.name, Button);


new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
});
