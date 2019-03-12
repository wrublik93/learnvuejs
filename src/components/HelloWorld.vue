<template>
  <div class="hello">
    <!-- полный синтаксис -->
    <p>Полный синтаксис</p>
    <a v-bind:href="url">Hello world</a>

    <!-- сокращенная запись -->
    <p>Сокращенный синтаксис</p>
    <a :href="reversedUrl">Hello world</a>
    <hr>
    <button @click.prevent="reversedUrl='566565'">fff</button>

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
    reversedUrl: {
      get: function () {
        // alert('Применение нового url');
        return this.url.split('').reverse().join('')
      },
      set: function (newValue) {
        // alert('Установка нового url: ' + newValue)
        this.url = newValue
      }
    }
  }
}
</script>
<style scoped>
</style>
