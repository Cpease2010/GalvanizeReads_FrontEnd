import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import BooksPage from '@/pages/BooksPage'
import NewBook from '@/pages/NewBook'
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
      path: '/books/:singleBook',
      name: 'OneBook',
      component: Onebook,
      props: true
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    }
  ]
})
