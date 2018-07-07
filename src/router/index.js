import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import Artical from '@/Artical'
import List from '@/List'
import Listpic from '@/Listpic'
import Vedio from "@/Vedio"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/artical/:col/:title',
      name: 'Artical',
      component: Artical
    },{
      path:'/list/:col',
      name:"List",
      component:List
    },{
      path:'/list/pic/:col',
      name:"Listpic",
      component:Listpic
    },{
      path:'/artical/vd/:col/:title',
      name:"Vedio",
      component:Vedio
    }
  ]
})
