<template>
  <form>
    <div  class="newBookForm">
    <label for="title">Title</label>
    <input name='title' type="text">
    <label for="genre">Genre</label>
    <input name='genre' type="text">
    <label for="coverImageUrl">Cover Image Url</label>
    <input name='coverImageurl' type="text">
    <label for="description">Description</label>
    <input name="description" type="text">
    <label for="author">Author</label>
    <input name="author" type="text">
    <input type="submit" value="submit">
    </div>
  </form>
</template>

<script>
export default {
  name: 'newBook'
}
</script>

<style scoped>
.newBookForm {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
}
</style>
