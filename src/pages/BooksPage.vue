<template>
  <div class="books">
    <ul>
      <Book  v-for='book in allBooks' :key='book.ID' :single-book="book"/>
    </ul>
  </div>
</template>

<script>
import Book from '../components/Book.vue'
export default {
  name: 'Books',
  props: ['allBooks'],
  components: {
    Book
  }
}
</script>

<style scoped>

</style>
