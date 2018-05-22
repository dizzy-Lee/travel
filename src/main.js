// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'//移动端300毫秒点击延迟解决方案
import 'styles/reset.css'//移动端样式不统一解决方案
import 'styles/border.css'//移动端一像素大小解决方案
import 'styles/iconfont.css'//引入图标

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
