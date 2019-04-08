<template>
    <div class="mainText" v-if="showText()">
        <div>
           Привет, админ!
        </div>
        <div>
            Vue.js предоставляет множество функций, которые позволяют создавать повторно
            используемые веб-компоненты. Маршрутизация — одна из таких функций. Она позволяет
            пользователю переключаться между страницами без обновления страницы. Это то,
            что делает навигацию в веб-приложениях простой и очень приятной. Итак, в этой
            статье я объясню, как работают маршрутизаторы Vue.js, создав в качестве примера
            шаблона Vue.js Router.
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextContent",
        data: function () {
            return {

            }
        },
        methods: {
            showText: function () {
                return localStorage.getItem('roles') === 'admin';
            }
        }
    }
</script>

<style scoped>
    .mainText {
        padding: 50px;
        text-align: justify;
        font-family: Roboto, serif;
        font-size: 22px;
        color: #E0E0E0;;

    }
</style>