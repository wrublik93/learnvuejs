<template>
  <div class="header">
    <label>Язык
      <select class="language">
        <option disabled>Выбор языка</option>
        <option>Русский</option>
        <option>Белорусский</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Language'
}
</script>

<style scoped>
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
</style>
