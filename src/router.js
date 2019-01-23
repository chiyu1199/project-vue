import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from './components/index';
import category from './components/category';
import categorylist from './components/categorylist';
import shopcart from './components/shopcart';
import userhome from './components/userhome';
import login from './components/login';
import reg from './components/reg';
import detail from './components/detail';
import error from './components/error';

const routes=[
  
  {path:'/index',component:index},
  {path:'/category',component:category},
  {path:'/categorylist',component:categorylist},
  {path:'/shopcart',component:shopcart},
  {path:'/userhome',component:userhome},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/detail',component:detail},
  {path:'/',redirect:'/index'},
  {path:'*',component:error},

];

export default new Router({
  routes
})
