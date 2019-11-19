/*
 * @Author: your name
 * @Date: 2019-11-11 16:10:25
 * @LastEditTime: 2019-11-16 16:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import me from '../views/me/me.vue';
import product from '../views/product/product.vue';
import productdetails from '../views/product/productdetails.vue';
import productseckill from '../views/product/productseckill.vue';
import shopCart from '../views/order/shopCart.vue';
import SubmitOrders from '../views/order/SubmitOrders.vue';


Vue.use(Router)


export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/index'
    },
    {
      name:"index",
      path:"/index",
      component:index
    },
    {
      name:"me",
      path:"/me",
      component:me
    },
    {
      name:"product",
      path:"/product",
      component:product
    },
    {
      name:"productdetails",
      path:"/productdetails",
      component:productdetails
    },
    {
      name:"productseckill",
      path:"/productseckill",
      component:productseckill
    },
    {
      name:"shopCart",
      path:"/shopCart",
      component:shopCart
    },
    {
      name:"SubmitOrders",
      path:"/SubmitOrders",
      component:SubmitOrders
    },
    
  ]
});
