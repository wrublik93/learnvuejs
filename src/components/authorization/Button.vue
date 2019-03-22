<template>
  <div>
    <input class="inputSave" type="submit" v-bind:value="buttonTextLang">
  </div>
</template>

<script>
  import Translate from '../../translate/translate'
export default {
  name: 'Button',
  data: function () {
    return {
      buttonTextLang: 'Войти'
    }
  },
  props: ['selected'],
  watch: {
    selected: function (value) {
      this.setTextButton(value)
    }
  },
  methods: {
    setTextButton (value) {
      if (value === 'Мова') {
        this.buttonTextLang = Translate.by.buttonName
      } else if (value === 'Язык') {
        this.buttonTextLang = Translate.ru.buttonName
      } else if (value === 'Language') {
        this.buttonTextLang = Translate.en.buttonName
      }
    }
  }
}
</script>

<style scoped>
  .inputSave {
    cursor: pointer;
    margin-top: 20px;
    padding: 10px 40px;
    background: rgba(0, 0, 0, 0.45);
    border: none;
    color: rgb(255,255,255);
    font-family: Roboto,serif;
    font-size: 18px;
  }
  .inputSave:hover {
    background: rgba(0, 0, 0, 1);
  }
</style>
