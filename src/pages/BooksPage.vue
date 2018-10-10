<template>
  <div class="books">
    <button><router-link :to="{name: 'newBook'}">New Book</router-link></button>
    <ul>
      <oneBook  v-for='book in allBooks' :key='book.ID' :singleBook='book'/>
    </ul>
  </div>
</template>

<script>
import oneBook from '../components/oneBook.vue';
export default {
  name: 'booksPage',
  props: ['allBooks'],
  components: {
    oneBook
  }
}
</script>

<style scoped>

</style>
