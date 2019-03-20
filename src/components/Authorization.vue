<template>
  <div class="mainDiv">
    {{ label }}
    <app-language></app-language>
    <div class="content">
      <form action="https://www.google.com" class="authorization" method="post">
        <div class="md-2">
          <app-email class="inputEmail"></app-email>
        </div>
        <div class="md-2-pass">
          <app-password class="inputPassword"></app-password>
        </div>
        <app-checkbox></app-checkbox>
        <app-button class="buttonSave"></app-button>
      </form>
    </div>
    <app-footer class="footer"></app-footer>
  </div>
</template>
<script>
import Button from './authorization/Button'
import Checkbox from './authorization/Checkbox'
import Email from './authorization/Email'
import Footer from './authorization/Footer'
import Language from './authorization/Language'
import Password from './authorization/Password'
export default {
  name: 'Authorization',
  data: function () {
    return {
    }
  },
  components: {
    'app-button': Button,
    'app-checkbox': Checkbox,
    'app-email': Email,
    'app-footer': Footer,
    'app-language': Language,
    'app-password': Password
  }
}
</script>

<style scoped>
  /*main style*/
  .mainDiv {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 0;
    min-height: calc(100vh);
    width: 100%;
    background: linear-gradient(47.41deg, #0066B0 0.46%, rgba(130, 212, 197, 0) 100%), radial-gradient(1848.24px at 100% 0%, #6244B8 0%, rgba(64, 35, 126, 0) 100%), radial-gradient(2388.70px at 130.06% 52.06%, #00F0FF 0%, rgba(76, 44, 145, 0) 100%);
  }
  /*form style*/
  .authorization {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }
  /*fields style form*/
  .md-2 {
    width: 20%;
  }
  .md-2-pass {
    width: 20%;
    margin-top: 20px
  }
</style>
