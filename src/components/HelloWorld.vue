<template>
  <div class="hello">
    <!-- полный синтаксис -->
    <p>Полный синтаксис</p>
    <a v-bind:href="url">Hello world</a>

    <!-- сокращенная запись -->
    <p>Сокращенный синтаксис</p>
    <a :href="url">Hello world</a>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: 'https://www.google.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
