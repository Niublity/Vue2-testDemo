// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import {Plugin1} from  "../static/js/plugin1"
import VueTouch from "vue-touch"
//引入elementui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
//引入axios
import axios from "axios"
import VueAxios from "vue-axios"
import PublicFunction from "../static/js/PublicFunction";
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(Plugin1)
Vue.use(VueTouch,{name:"v-touch"})
Vue.prototype.publicfunction = PublicFunction


Vue.prototype.group=function(obj){
  var newkey = Object.keys(obj).sort();
  var newObj = {};
  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]];
  }
  return newObj;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: {App},
  template: '<App/>'
})
