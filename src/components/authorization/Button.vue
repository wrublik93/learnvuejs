<template>
  <div>
    <input class="inputSave" type="submit" v-bind:value="buttonTextLang">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
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
        this.buttonTextLang = this.GET_CURRENT_LOCALE.by.buttonName
      } else if (value === 'Язык') {
        this.buttonTextLang = this.GET_CURRENT_LOCALE.ru.buttonName
      } else if (value === 'Language') {
        this.buttonTextLang = this.GET_CURRENT_LOCALE.en.buttonName
      }
    }
  },
  computed: {
    ...mapGetters({
      GET_CURRENT_LOCALE:'translate/GET_CURRENT_LOCALE'

  })
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
