<template>
  <div class="books">
    <ul>
      <OneBook  v-for='book in allBooks' :key='book.ID' :singleBook='book'/>
    </ul>
  </div>
</template>

<script>
import OneBook from '../components/OneBook.vue'
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
