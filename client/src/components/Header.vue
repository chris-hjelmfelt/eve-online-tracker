<template>
  <header>
    <img :src="image" alt="eve online logo">
  </header>

</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        image: require('@/assets/eve-logo.png')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 400px;
  }
  @media(max-width: 700px){
    img {
      display: block;
      margin: auto;
    }
  }
</style>