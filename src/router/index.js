import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Career from '@/components/Career'
import Hobby from '@/components/Hobby'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },{
      path: '/career',
      name: 'Career',
      component: Career
    },{
      path: '/hobby',
      name: 'Hobby',
      component: Hobby
    }
  ]
})
