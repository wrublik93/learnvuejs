<template>
  <div class="header">
    <label>
      <span>{{selected}}</span>
      <select v-model="selected" class="language" @change="translateText">
        <option v-for="option in options" :key="option.id" v-bind:value="option.text"> {{ option.textLang }} </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: 'Язык',
      options: [
        {text: 'Язык', textLang: 'Русский'},
        {text: 'Language', textLang: 'English'},
        {text: 'Мова', textLang: 'Беларуская'}
      ],
    }
  },
  methods: {
    translateText () {
      this.onTranslate({
        selected: this.selected,
      })
    }
  },
  props: ['onTranslate']
}
</script>

<style scoped>
  .header {
    height: 50px;
    color: #E0E0E0;;
    text-align: right;
    font-family: Roboto,serif;
    font-size: 18px;
  }
  .language {
    border: none;
    background: none;
    color: #E0E0E0;
    -moz-appearance: none;
    font-family: Roboto,serif;
    font-size: 18px;
  }
</style>
