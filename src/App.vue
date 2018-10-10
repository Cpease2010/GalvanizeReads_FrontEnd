<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <readsHeader/>
    <router-view :allBooks='books'/>
  </div>
</template>

<script>
import readsHeader from './components/readsHeader.vue'
export default {
  name: 'App',
  components: {
    readsHeader
  },
  data() {
    return {
      books: [],
      apiUrl: "../static/greads.json",
      authorsOnly: [],
      booksOnly: []
    }
  },
  methods: {
    getAuthors(result) {
      result.filter(authors => {
        authors['Author 1 First Name'] ? this.authorsOnly.push({
          "Author First Name": authors['Author 1 First Name'],
          "Author Last Name": authors['Author 1 Last Name'],
          "Author Biography": authors['Author 1 Biography'],
          "Author Portrait URL": authors['Author 1 Portrait URL']
        }) : false;
        authors['Author 2 First Name'] ? this.authorsOnly.push({
          "Author First Name": authors['Author 2 First Name'],
          "Author Last Name": authors['Author 2 Last Name'],
          "Author Biography": authors['Author 2 Biography'],
          "Author Portrait URL": authors['Author 2 Portrait URL']
        }) : false;
        authors['Author 3 First Name'] ? this.authorsOnly.push({
          "Author First Name": authors['Author 3 First Name'],
          "Author Last Name": authors['Author 3 Last Name'],
          "Author Biography": authors['Author 3 Biography'],
          "Author Portrait URL": authors['Author 3 Portrait URL']
        }) : false;
      })
      return result
    },
    getBooks(result){
      return result.filter(books => books["Book Title"] ? this.booksOnly.push({
        "Book Title": books["Book Title"],
        "Book Genre": books["Book Genre"],
        "Book Description": books["Book Description"],
        "Book Cover URL": books["Book Cover URL"]
      }) : false)
    }
  },
  mounted(){
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(response => this.books = response)
      .then(response => this.getAuthors(response))
      .then(response => this.getBooks(response))
  }
}
</script>

<style>

</style>
