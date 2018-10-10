<template>
  <div class="home">
    <div>
      <router-link :to="{name: 'booksPage'}" exact>
      <img src="https://via.placeholder.com/300x300" alt="">
      <h1>Books</h1>
      </router-link>
    </div>
    <div>
      <img src="https://via.placeholder.com/300x300" alt="">
      <h1>Author</h1>
    </div>
  </div>
</template>

<style scoped>
.home{
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: auto;
}
</style>

