<template>
    <div class="mainPage">
        <language-main-page :onTranslate="onTranslate"></language-main-page>
    </div>
</template>

<script>
    import Languagemain from './mainpage/Languagemain'
  export default {
    name: 'Mainpage',
    data: function () {
      return {
        changeMainLang: ''
      }
    },
    components: {
      'language-main-page' : Languagemain
    },
    methods: {
      onTranslate (data) {
        this.changeMainLang = data.changeMainLang
      }
    }
  }
</script>

<style scoped>
    .mainPage {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin: 0;
        min-height: calc(100vh);
        width: 100%;
        background: linear-gradient(47.41deg, #0066B0 0.46%, rgba(130, 212, 197, 0) 100%), radial-gradient(1848.24px at 100% 0%, #6244B8 0%, rgba(64, 35, 126, 0) 100%), radial-gradient(2388.70px at 130.06% 52.06%, #00F0FF 0%, rgba(76, 44, 145, 0) 100%);
    }
</style>
