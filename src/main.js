// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入轮播插件
import fastClick from 'fastclick'//移动端300毫秒点击延迟解决方案
import 'styles/reset.css'//移动端样式不统一解决方案
import 'styles/border.css'//移动端一像素大小解决方案
import 'styles/iconfont.css'//引入图标
import 'swiper/dist/css/swiper.css'//引入轮播的css文件

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
