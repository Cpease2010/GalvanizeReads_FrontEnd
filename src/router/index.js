import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import booksPage from '../pages/booksPage'
import newBook from '../pages/newBook'
import oneBook from '../components/oneBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/books',
      name: 'booksPage',
      component: booksPage
    },
    {
      path: '/books/:singleBook',
      name: 'oneBook',
      component: oneBook,
      props: true
    },
    {
      path: '/books/new',
      name: 'newBook',
      component: newBook
    }
  ]
})
