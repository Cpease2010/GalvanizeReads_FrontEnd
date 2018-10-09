import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import BooksPage from '@/pages/BooksPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: BooksPage
    }
  ]
})
