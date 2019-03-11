<template>
  <div class="hello">
    <!-- полный синтаксис -->
    <p>Полный синтаксис</p>
    <a v-bind:href="url">Hello world</a>

    <!-- сокращенная запись -->
    <p>Сокращенный синтаксис</p>
    <a :href="url">Hello world</a>
    <hr>
    <p><b>Cтрока из url</b></p>{{ url }}
    <p><b>Строка из url реверс</b></p>{{ reversedUrl }}
    <hr>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: 'https://www.google.com'
    }
  },
  computed: {
    reversedUrl: function() {
      return this.url.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
