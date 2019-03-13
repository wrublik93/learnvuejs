<template>
  <div class="mainDiv">
    <div class="header">
      <label>Язык
        <select class="language">
          <option disabled>Выбор языка</option>
          <option>Русский</option>
          <option>Белорусский</option>
        </select>
      </label>
    </div>
    <div class="content">
      <form action="#" class="authorization">
        <div class="md-2">
          <div style="width: 32px; margin: 0 0 -47px 0;">
          <!--<div style="position: relative; bottom: -50px; width: 35px">-->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1974 1.18774C21.3131 1.18774 25.4602 5.33479 25.4602 10.4505C25.4602 15.5662 21.3131 19.7132 16.1974 19.7132C11.0817 19.7132 6.93467 15.5662 6.93467 10.4505C6.93467 5.33479 11.0817 1.18774 16.1974 1.18774ZM9.26467 20.5093C12.9198 23.0263 18.4792 23.7286 23.1305 20.5094L27.2596 21.5416C29.6446 22.1379 31.3178 24.2808 31.3178 26.7393V28.9997C31.3178 30.3411 30.2304 31.4285 28.889 31.4285H3.50585C2.16443 31.4285 1.07703 30.3411 1.07703 28.9997V26.7393C1.07703 24.2808 2.75023 22.1379 5.13528 21.5416L9.26467 20.5093Z" fill="black" stroke="black"></path>
            </svg>
          </div>
          <input class="input" placeholder="Пользователь" type="text">
        </div>
        <div class="md-2" style="margin-top: 20px">
          <div style="width: 32px; margin: 0 0 -50px 0">
          <!--<div style="position: relative; bottom: -50px">-->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.8868 14.3081H9.23361V8.67941C9.23361 6.51748 10.9788 4.72134 13.1589 4.6995C15.361 4.67766 17.1612 6.45197 17.1612 8.63028V9.50379C17.1612 10.2299 17.7503 10.814 18.4825 10.814H20.2442C20.9764 10.814 21.5655 10.2299 21.5655 9.50379V8.63028C21.5655 4.04437 17.7944 0.315585 13.1699 0.331963C8.54544 0.348341 4.82936 4.12626 4.82936 8.71217V14.3081H3.50809C2.04918 14.3081 0.86554 15.4818 0.86554 16.9286V25.6637C0.86554 27.1104 2.04918 28.2842 3.50809 28.2842H22.8868C24.3457 28.2842 25.5293 27.1104 25.5293 25.6637V16.9286C25.5293 15.4818 24.3457 14.3081 22.8868 14.3081ZM15.3995 22.6064C15.3995 23.8129 14.4141 24.7902 13.1974 24.7902C11.9808 24.7902 10.9953 23.8129 10.9953 22.6064V19.9859C10.9953 18.7793 11.9808 17.8021 13.1974 17.8021C14.4141 17.8021 15.3995 18.7793 15.3995 19.9859V22.6064Z" fill="black"></path>
            </svg>
          </div>
          <div style="z-index: 1">
            <input class="input" placeholder="Пароль" type="password">
          </div>
        </div>
        <div class="checkbox md-2">
          <input type="checkbox" id="checkboxSave">
          <span for="checkboxSave">Запомнить</span>
        </div>
        <input class="inputSave" type="submit" value="Войти" >
      </form>
    </div>
    <footer class="footer">Task Manager<br>Copyright &copy; 2019</footer>
  </div>
</template>
<script>
export default {
  name: 'Authorization',
  data: function () {

  }
}
</script>

<style scoped>
  .authorization {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }
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
  .input {
    width: 100%;
    border: none;
    color: #5E5E5E;
    background-color: rgba(255, 255, 255, 0.62);
    padding: 10px 35px;
    margin: 10px 0 10px 0;
    font-size: 16px;
  }
  .input:focus {
    color: black;
    background-color: rgba(255, 255, 255, 1);
    outline-color: aqua;
  }
  .md-2 {
    width: 20%;
  }

  .mainDiv {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 0;
    min-height: calc(100vh);
    width: 100%;
    background: linear-gradient(47.41deg, #0066B0 0.46%, rgba(130, 212, 197, 0) 100%), radial-gradient(1848.24px at 100% 0%, #6244B8 0%, rgba(64, 35, 126, 0) 100%), radial-gradient(2388.70px at 130.06% 52.06%, #00F0FF 0%, rgba(76, 44, 145, 0) 100%);
  }
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
  .footer {
    height: 55px;
    color: white;
    text-align: center;
    font-size: 16px;
  }
</style>
