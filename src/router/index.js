import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入每一个组件
import Home from '@/components/Home.vue'
import Discover from '@/components/Discover.vue'
import Order from '@/components/Order.vue'
import My from '@/components/My.vue'

import Location from '@/components/Location.vue'
import Goods from '@/components/Goods.vue'

// 配置
const routes = [
  {
    //当地址栏的hash值跟path一样时，
    // 对应的组件会被加载到router-view容器中
    path: '/home',
    //设置名字
    name: 'home',
    //设置别名，作用的是path
    // alias: '/',
    component: Home,
    //配置子页面
    children: [
      {
        path: 'location',
        component: Location
      },
      {
      	path:'goods/:dataSource',
      	name:'goods1',
      	component:Goods,
      }
    ]
  },
  {
    path: '/discover',
//  path: '/discover/:type',
    name: 'discover',
    component: Discover
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    // path: '/',
    path: '**',
    //重定向
    redirect: '/home'
  }
];

export default new Router({
  routes
})
