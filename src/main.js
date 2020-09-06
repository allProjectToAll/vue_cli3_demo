import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

// import axios from './config/httpConfig'
// import * as globalFilter from './filters/filters'
// import '@/icons'

/////////////////////////////////
//多语言
import i18n from './i18n/i18n';
// import api from '@/libs/api'
// Vue.prototype.api = api;
import jsonJs from '@/libs/json'
Vue.prototype.jsonJs = jsonJs;
//滚动轴
// import EasyScroll from "easyscroll";
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// Vue.use(EasyScroll);

import vuescroll from "vuescroll";//引入vuescroll
import "vuescroll/dist/vuescroll.css";//引入vuescroll样式
Vue.use(vuescroll);//使用

import api from '@/api/index'
Vue.prototype.api = api;

////////////////////////////////

// Vue.prototype.$http = axios

// for (var key in globalFilter) {
//     Vue.filter(key, globalFilter[key])
// }

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if (!store.state.permission.permissionList) {//没有权限
            store.dispatch('permission/FETCH_PERMISSION').then(() => {//调用store内接口查询所有全县
                next({ path: to.path })
            })
        } else {//有权限
            if (to.path !== '/login') {
                next()
            } else {//已经登陆过的，不能跳转到登陆页
                next(from.fullPath)
            }
        }
    }
})

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('setCrumbList', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
