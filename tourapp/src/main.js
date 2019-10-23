// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store.js'
import Lytab from 'ly-tab'
import '@/assets/css/border.css'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Lytab)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    let map = new BMap.Map('allmap');
    let myCity = new BMap.LocalCity();
    myCity.get((result)=>{
      if(result){
        this.$store.state.city = result.name;
      }else{
        this.$store.state.city = '上海';
      }
    })
  }
})
