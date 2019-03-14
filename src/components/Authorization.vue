<template>
  <div class="mainDiv">
    <app-language class="header"></app-language>
    <div class="content">
      <form action="#" class="authorization">
        <div class="md-2">
          <app-email class="inputEmail"></app-email>
        </div>
        <div class="md-2" style="margin-top: 20px">
          <app-password class="inputPassword"></app-password>
        </div>
        <div class="checkbox md-2">
          <input type="checkbox" id="checkboxSave">
          <span for="checkboxSave">Запомнить</span>
        </div>
        <app-button class="buttonSave"></app-button>
      </form>
    </div>
    <app-footer class="footer"></app-footer>
  </div>
</template>
<script>
import Button from './authorization/Button'
import Email from './authorization/Email'
import Footer from './authorization/Footer'
import Language from './authorization/Language'
import Password from './authorization/Password'
export default {
  name: 'Authorization',
  data: function () {

  },
  components: {
    'app-button': Button,
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
  /*header style*/
  .header {
    height: 50px;
    color: #E0E0E0;;
    text-align: right;
    font-family: Roboto,serif;
    font-size: 18px;
  }
  /*style language component*/
  .header >>> .language {
    border: none;
    background: none;
    color: #E0E0E0;
    -moz-appearance: none;
    font-family: Roboto,serif;
    font-size: 18px;
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
  /*style iconUser, email component*/
  .inputEmail >>> .iconUser {
    width: 32px;
    margin: 0 0 -47px 0;
  }
  /*style iconPassword, password component*/
  .inputPassword >>> .iconPassword {
    width: 32px;
    margin: 0 0 -50px 0
  }
  /*styles email component and password component*/
  .inputEmail >>> .input, .inputPassword >>> .input {
    width: 100%;
    border: none;
    color: #5E5E5E;
    background-color: rgba(255, 255, 255, 0.62);
    padding: 10px 35px;
    margin: 10px 0 10px 0;
    font-size: 16px;
  }
  /*styles email component and password component (focus)*/
  .inputEmail >>> .input:focus, .inputPassword >>> .input:focus {
    color: black;
    background-color: rgba(255, 255, 255, 1);
    outline-color: aqua;
  }
  /*checkbox styles*/
  .checkbox {
    display: flex;
    margin: 0;
  }
  .checkbox > span {
    text-align: center;
    vertical-align: middle;
    color: white;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  input[type="checkbox"] {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    display: flex;
    background: none;
    height: 20px;
    width: 20px;
    margin: 5px 5px 5px 0;
    border: 1px solid white;
  }
  input[type="checkbox"]:checked {
    background: #2aa1c0;
  }
  input[type="checkbox"]:hover {
    filter: brightness(90%);
  }
  input[type="checkbox"]:disabled {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  input[type="checkbox"]:after {
    content: '';
    position: relative;
    left: 40%;
    top: 20%;
    width: 15%;
    height: 40%;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }
  input[type="checkbox"]:checked:after {
    display: flex;
  }
  input[type="checkbox"]:disabled:after {
    border-color: #7b7b7b;
  }
  /*style button component*/
  .buttonSave >>> .inputSave {
    cursor: pointer;
    margin-top: 20px;
    padding: 10px 40px;
    background: rgba(0, 0, 0, 0.45);
    border: none;
    color: rgb(255,255,255);
    font-family: Roboto,serif;
    font-size: 18px;
  }
  /*style button component (hover)*/
  .buttonSave >>> .inputSave:hover {
    background: rgba(0, 0, 0, 1);
  }
  /*style footer component*/
  .footer {
    height: 55px;
    color: white;
    text-align: center;
    font-size: 16px;
  }
</style>
