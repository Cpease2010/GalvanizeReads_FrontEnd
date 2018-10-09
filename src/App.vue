<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header/>
    <router-view :allBooks='books'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return {
      books: [],
      apiUrl: "../static/greads.json"
    }
  },
  mounted(){
    fetch(this.apiUrl)
    .then(response => response.json())
    .then(result => this.books = result)
  }
}
</script>

<style>

</style>
