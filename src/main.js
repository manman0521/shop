import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.css";
import "@/assets/js/rem.js";
import "vant/lib/index.css";

import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload
} from "vant";
Vue.use(NavBar)
  .use(Icon)
  .use(Tabbar)
  .use(Button)
  .use(Swipe)
  .use(TabbarItem)
  .use(SwipeItem)
  .use(Lazyload);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
