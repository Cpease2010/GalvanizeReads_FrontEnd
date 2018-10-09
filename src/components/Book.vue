<template>
  <div class="singleBook">
    <li>
      <h1>{{singleBook['Book Title']}}</h1>
      <h2>{{`${singleBook['Author 1 First Name']} ${singleBook['Author 1 Last Name']}`}}</h2>
      <h2 v-if="singleBook['Author 2 First Name']">{{`${singleBook['Author 2 First Name']} ${singleBook['Author 2 Last Name']}`}}</h2>
      <h2 v-if="singleBook['Author 3 First Name']">{{`${singleBook['Author 3 First Name']} ${singleBook['Author 3 Last Name']}`}}</h2>
      <h3>{{singleBook['Book Genre']}}</h3>
      <p>{{singleBook['Book Description']}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['singleBook']
}
</script>
