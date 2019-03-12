<template>
  <div class="hello">
    <!-- полный синтаксис -->
    <p>Полный синтаксис</p>
    <a v-bind:href="url">Hello world</a>

    <!-- сокращенная запись -->
    <p>Сокращенный синтаксис</p>
    <a :href="reversedUrl">Hello world</a>
    <hr>
    <!--<p><b>Cтрока из url</b></p>{{ url }}-->
    <!--<p><b>Строка из url реверс</b></p>{{ reversedUrl }}-->
    <!--<hr>-->
    <!--<button v-on:click="changeUrlSetter">Изменить url (setter)</button>-->
    <!--Изменение строки URL: {{ url }}-->
    <button @click.prevent="reversedUrl(3)">fff</button>

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
  // methods: {
  //   changeUrlSetter: function () {
  //     this.reversedUrl = 'https://www.tut.by'
  //   }
  // },
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
  // computed: {
  //   reversedUrl: function () {
  //     return this.url.split('').reverse().join('')
  //   }
  // }
}
</script>
<style scoped>
</style>
