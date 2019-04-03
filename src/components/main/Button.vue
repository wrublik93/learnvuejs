<template>
    <div>
        <input @click="exit" class="inputSave" type="submit" v-bind:value="buttonTextLang">
    </div>
</template>

<script>
    import router from '../../router'
    import { mapGetters } from 'vuex'
  export default {
    name: 'Button',
      data: function () {
          return {
              buttonTextLang: 'Выйти'
          }
      },
      props: ['changeMainLang'],
      watch: {
        changeMainLang: function (value) {
            this.setTextButton(value)
        }
      },
      methods: {
          setTextButton (value) {
              if (value === 'Мова') {
                  this.buttonTextLang = this.GET_CURRENT_LOCALE_BY.buttonExit
              } else if (value === 'Язык') {
                  this.buttonTextLang = this.GET_CURRENT_LOCALE_RU.buttonExit
              } else if (value === 'Language') {
                  this.buttonTextLang = this.GET_CURRENT_LOCALE_EN.buttonExit
              }
          },
          exit: function () {
              router.push('/login');
              localStorage.clear();
          }
      },
      computed: {
          ...mapGetters({
              GET_CURRENT_LOCALE_RU:'translate/GET_CURRENT_LOCALE_RU',
              GET_CURRENT_LOCALE_BY:'translate/GET_CURRENT_LOCALE_BY',
              GET_CURRENT_LOCALE_EN:'translate/GET_CURRENT_LOCALE_EN'
          })
      }
  }
</script>

<style scoped>
    .inputSave {
        cursor: pointer;
        margin-right: 20px;
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
