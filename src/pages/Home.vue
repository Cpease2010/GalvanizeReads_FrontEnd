<template>
  <div class="home">
    <div class="books_home">
      <router-link :to="{name: 'BooksPage'}" exact>
      <img src="https://via.placeholder.com/600x600" alt="">
      <h1>Books</h1>
      </router-link>
    </div>
    <div class="authors_home">
      <img src="https://via.placeholder.com/600x600" alt="">
      <h1>Author</h1>
    </div>
  </div>
</template>

<style scoped>
.home{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 90vh;
}
.books_home{
  flex-basis: 50%;
}
.authors_home{
  flex-basis: 50%;
}
</style>

