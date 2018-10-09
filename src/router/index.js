import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import BooksPage from '@/pages/BooksPage'
import Onebook from '@/components/Onebook'

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
      name: 'BooksPage',
      component: BooksPage
    },
    {
      path: '/oneBook/:singleBook',
      name: 'OneBook',
      component: Onebook,
      props: true
    }
  ]
})
