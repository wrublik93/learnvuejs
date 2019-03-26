<template>
    <div class="header">
        <label>
            <span>{{changeMainLang}}</span>
            <select v-model="changeMainLang" class="language" @change="translateText">
                <option v-for="option in options" :key="option.id" v-bind:value="option.label"> {{ option.textLang }} </option>
            </select>
        </label>
    </div>
</template>

<script>
  export default {
    name: 'Language',
    data: function () {
      return {
        changeMainLang: 'Язык',
        options: [
          {label: 'Язык', textLang: 'Русский'},
          {label: 'Language', textLang: 'English'},
          {label: 'Мова', textLang: 'Беларуская'}
        ],
      }
    },
    methods: {
      translateText () {
        this.onTranslate({
          changeMainLang: this.changeMainLang,
        })
      }
    }
    // props: ['onTranslate']
  }
</script>

<style scoped>
    .header {
        height: 50px;
        color: #E0E0E0;;
        text-align: right;
        font-family: Roboto,serif;
        font-size: 18px;
        padding-top: 10px;
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
