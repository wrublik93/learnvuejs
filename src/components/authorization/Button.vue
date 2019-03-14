<template>
  <div><input class="inputSave" type="submit" value="Войти" ></div>
</template>

<script>
export default {
  name: 'Button'
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
