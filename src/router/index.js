import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入每一个组件
import Home from '@/pages/home/index.vue'
import Discover from '@/pages/discover/index.vue'
import Order from '@/pages/order/index.vue'
import Mine from '@/pages/mine/index.vue'

import StartSearch from '@/components/common/search/startSearch.vue'

import Cate from '@/components/home/index/banner/cate.vue'

import Collect from '@/components/location/collect.vue'

import Detail from '@/components/home/business/detail.vue'

import SetMeal from '@/components/home/index/hot/SetMeal.vue'

import RushToPurchase from '@/components/home/index/hot/rushToPurchase.vue'


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
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {//搜索页面
    path: '/startSearch',
    name: 'startSearch',
    component: StartSearch
  },
  {//美食页面
    path: '/cate',
    name: 'cate',
    component: Cate
  },
  {
  	path:'/collect',
  	name:'collect',
  	component:Collect
  },
  {
    path:'/detail',
  	name:'detail',
  	component:Detail
  },
  {
  	path:'/setMeal',
  	name:'setMeal',
  	component:SetMeal
  },
  {//品质套餐页面
  	path:'/rushToPurchase',
  	name:'rushToPurchase',
  	component:RushToPurchase
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
