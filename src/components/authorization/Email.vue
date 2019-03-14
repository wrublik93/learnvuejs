<template>
  <div>
    <div class="iconUser">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1974 1.18774C21.3131 1.18774 25.4602 5.33479 25.4602 10.4505C25.4602 15.5662 21.3131 19.7132 16.1974 19.7132C11.0817 19.7132 6.93467 15.5662 6.93467 10.4505C6.93467 5.33479 11.0817 1.18774 16.1974 1.18774ZM9.26467 20.5093C12.9198 23.0263 18.4792 23.7286 23.1305 20.5094L27.2596 21.5416C29.6446 22.1379 31.3178 24.2808 31.3178 26.7393V28.9997C31.3178 30.3411 30.2304 31.4285 28.889 31.4285H3.50585C2.16443 31.4285 1.07703 30.3411 1.07703 28.9997V26.7393C1.07703 24.2808 2.75023 22.1379 5.13528 21.5416L9.26467 20.5093Z" fill="black" stroke="black"></path>
      </svg>
    </div>
    <div>
      <input class="input" placeholder="Пользователь" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Email'
}
</script>

<style scoped>
  .iconUser {
    width: 32px;
    margin: 0 0 -47px 0;
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
</style>
