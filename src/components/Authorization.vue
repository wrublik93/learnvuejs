<template>
  <form action="#" class="authorization">
      <input placeholder="Пользователь">
      <input placeholder="Пароль">
      <label><input type="checkbox">Запомнить</label>
      <button v-on:click="">Войти</button>
  </form>
    <!--<label>Язык-->
      <!--<select style="border: none; width: 100px; background: none">-->
        <!--<option disabled value="">Выбор языка</option>-->
        <!--<option>Русский</option>-->
        <!--<option>Белорусский</option>-->
      <!--</select>-->
    <!--</label>-->
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
    padding-top: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }
  .authorization > input {
    color: #5E5E5E;
    background-color: #c1bfd5;
    width: 379px;
    height: 53px;
    margin: 10px 0 10px 0;
    box-sizing: border-box;
    font-size: 24px;
  }
  form > * {

  }

</style>
