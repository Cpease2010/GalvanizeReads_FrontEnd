<template>
  <div class="books">
    <button><router-link :to="{name: 'NewBook'}">New Book</router-link></button>
    <ul>
      <OneBook  v-for='book in allBooks' :key='book.ID' :singleBook='book'/>
    </ul>
  </div>
</template>

<script>
import OneBook from '../components/OneBook.vue';
export default {
  name: 'BooksPage',
  props: ['allBooks'],
  components: {
    OneBook
  }
}
</script>

<style scoped>

</style>
