import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/404', hidden: true },
    { 
      path: '/404', 
      component: ()=>import('@/pages/error/Error') 
    },
    { 
      path: '/login',
      name:'login', 
      component: ()=>import('@/pages/login/Login') 
    },
    { 
      path: '/', 
      component: ()=>import('@/pages/login/Login') 
    },
    { 
      path: '/test',
      name:'test', 
      component: ()=>import('@/pages/test/Test')  
    },
    {
      path: '/index',
      // name:'导航',
      component:  ()=>import('@/pages/Index') ,
      children:[
        {path: '/',name:'默认首页',component: ()=>import('@/pages/demo')},
        //用户管理
        {path: '/demo',name:'demo',component: ()=>import('@/pages/demo')},
        //test
        {path: '/echarts',name:'图标',component: ()=>import('@/pages/test/Echarts')},
        {path: '/err',name:'err',component:  ()=>import('@/pages/error/Error') },
        {path: '/test',name:'测试模块',component: ()=>import('@/pages/test/Test') },
      ]
    },

  ]
})

