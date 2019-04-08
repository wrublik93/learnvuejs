<template>
    <div>
        <input @click="VALID_CREDENTIALS()" class="inputSave" type="submit" v-bind:value="buttonTextLang">
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'Button',
        data: function () {
            return {
                buttonTextLang: 'Войти'
            }
        },
        props: ['selected'],
        watch: {
            selected: function (value) {
                this.setTextButton(value)
            }
        },
        methods: {
            setTextButton(value) {
                if (value === 'Мова') {
                    this.buttonTextLang = this.GET_CURRENT_LOCALE_BY.buttonName;
                } else if (value === 'Язык') {
                    this.buttonTextLang = this.GET_CURRENT_LOCALE_RU.buttonName
                } else if (value === 'Language') {
                    this.buttonTextLang = this.GET_CURRENT_LOCALE_EN.buttonName
                }
            },
            ...mapActions({
                VALID_CREDENTIALS: 'user/VALID_CREDENTIALS'
            }),
        },
        computed: {
            ...mapGetters({
                GET_CURRENT_LOCALE_RU:'translate/GET_CURRENT_LOCALE_RU',
                GET_CURRENT_LOCALE_BY:'translate/GET_CURRENT_LOCALE_BY',
                GET_CURRENT_LOCALE_EN:'translate/GET_CURRENT_LOCALE_EN',
                GET_USERNAME: 'user/GET_USERNAME',
                GET_PASSWORD: 'user/GET_PASSWORD',
            }),
        }
    }
</script>

<style scoped>
    .inputSave {
        cursor: pointer;
        margin-top: 20px;
        padding: 10px 40px;
        background: rgba(0, 0, 0, 0.45);
        border: none;
        color: rgb(255, 255, 255);
        font-family: Roboto, serif;
        font-size: 18px;
    }

    .inputSave:hover {
        background: rgba(0, 0, 0, 1);
    }
</style>
