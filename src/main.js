/*
 * @Author: your name
 * @Date: 2019-11-11 22:10:29
 * @LastEditTime: 2019-11-16 09:15:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import './assets/base.less'
import './assets/style/iconfont.css'

// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);

// import { SwitchCell } from 'vant';
// Vue.use(SwitchCell);

// import { Cell, CellGroup } from 'vant';
// Vue.use(Cell).use(CellGroup);

// import { Grid, GridItem } from 'vant';
// Vue.use(Grid).use(GridItem);

// import { Tabbar, TabbarItem } from 'vant';
// Vue.use(Tabbar).use(TabbarItem);

// import { TreeSelect } from 'vant';
// Vue.use(TreeSelect);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
