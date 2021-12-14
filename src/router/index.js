import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Works from '@/views/Works'
import Skills from '@/views/Skills'
// import Skills from '@/views/Skills_test'
import Contact from '@/views/Contact'
// import Contact from '@/views/Contact_test'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }  ]
})

