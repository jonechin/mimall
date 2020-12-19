import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Index from './pages/Index'
import Product from './pages/Product'
import Detail from './pages/Detail'

import Cart from './pages/Cart'
import Order from './pages/Order'
import OrderConfirm from './pages/OrderConfirm'
import OrderList from './pages/OrderList'
import OrderPay from './pages/OrderPay'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index,
        }, {
          path:'/product/:id',
          name:'product',
          component:Product,
        }, {
          path:'/detail/:id',
          name:'detail',
          component:Detail,
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart,
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path:'list',
          name:'order-list',
          component:OrderList,
        },
        {
          path:'confirm',
          name:'order-confirm',
          component:OrderConfirm,
        },
        {
          path:'pay',
          name:'order-pay',
          component:OrderPay,
        },
      ]
    }
  ]
})