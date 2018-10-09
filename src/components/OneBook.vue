<template>
  <div class="singleBook">
    <li>
      <router-link :to="{name: 'OneBook', params: {singleBook: singleBook}}">
        <h1>Title: {{singleBook['Book Title']}}</h1>
      </router-link>
      <h2>Author: {{`${singleBook['Author 1 First Name']} ${singleBook['Author 1 Last Name']}`}}</h2>
      <h2 v-if="singleBook['Author 2 First Name']">Author: {{`${singleBook['Author 2 First Name']} ${singleBook['Author 2 Last Name']}`}}</h2>
      <h2 v-if="singleBook['Author 3 First Name']">Author: {{`${singleBook['Author 3 First Name']} ${singleBook['Author 3 Last Name']}`}}</h2>
      <h3>Genre: {{singleBook['Book Genre']}}</h3>
      <p>Description: {{singleBook['Book Description']}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'OneBook',
  props: ['singleBook']
}
</script>

<style scoped>
.singleBook{
  list-style: none;
}
</style>
