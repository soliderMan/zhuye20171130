import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import MyCar from '../pages/MyCar.vue';
import Personal from '../pages/Personal.vue';
import Classify from '../pages/Classify.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/product',component:Product},
    {path:'/mycar',component:MyCar},
    {path:'/personal',component:Personal},
    {path:'/classify',component:Classify}
    // {path:'*',redirect:'/home'}
  ]
})
