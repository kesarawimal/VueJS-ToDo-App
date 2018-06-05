import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TodoList
    },
    {
      path: '/nav',
      component: Navbar
    }
  ]
})
