// 引入该插件，可为该项目全局加上es6的新方法，在cmd中输入cnpm install --save babel-polyfill
import 'babel-polyfill';

import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 该插件是消除移动端的点击事件延迟300ms问题，需要在cmd中输入 cnpm install --save fastclick
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  preLoad: 1, // 提前加载高度（数字 1 表示 1 屏的高度）
  error: require('assets/images/error.png'),
  loading: require('assets/images/loading.gif'),
  attempt: 1 // 加载错误后最大尝试次数
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
