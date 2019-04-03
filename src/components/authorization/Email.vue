<template>
    <div>
        <div class="iconUser">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.24"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1974 1.18774C21.3131 1.18774 25.4602 5.33479 25.4602 10.4505C25.4602 15.5662 21.3131 19.7132 16.1974 19.7132C11.0817 19.7132 6.93467 15.5662 6.93467 10.4505C6.93467 5.33479 11.0817 1.18774 16.1974 1.18774ZM9.26467 20.5093C12.9198 23.0263 18.4792 23.7286 23.1305 20.5094L27.2596 21.5416C29.6446 22.1379 31.3178 24.2808 31.3178 26.7393V28.9997C31.3178 30.3411 30.2304 31.4285 28.889 31.4285H3.50585C2.16443 31.4285 1.07703 30.3411 1.07703 28.9997V26.7393C1.07703 24.2808 2.75023 22.1379 5.13528 21.5416L9.26467 20.5093Z"
                      fill="black" stroke="black"></path>
            </svg>
        </div>
        <div>
            <input v-model="username" class="input" @input="validatorUser(username)"
                   v-bind:placeholder="emailTextLang">
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        data: function () {
            return {
                email: '',
                answerEmail: '',
                emailTextLang: 'Пользователь'
            }
        },
        props: ['selected'],
        watch: {
            selected: function (value) {
                this.setTextEmail(value)
            }
        },
        methods: {
            ...mapMutations({
                SET_USERNAME: 'user/SET_USERNAME',
            }),
            validatorUser: function (value) {
                let temp = [];
                if (value.indexOf('.') !== -1 && value.indexOf('@') !== -1) {
                    temp = value.split('@');
                    if (temp[0].length < 1) {
                        return false
                    }
                    temp = temp[1].split('.');
                    if (temp[0].length < 1 && temp[1].length < 1) {
                        return false
                    }
                    document.querySelector('.input').style.border = '2px solid green'
                } else {
                    document.querySelector('.input').style.border = '2px solid red'
                }
            },
            setTextEmail(value) {
                if (value === 'Мова') {
                    this.emailTextLang = this.GET_CURRENT_LOCALE_BY.inputEmail
                } else if (value === 'Язык') {
                    this.emailTextLang = this.GET_CURRENT_LOCALE_RU.inputEmail
                } else if (value === 'Language') {
                    this.emailTextLang = this.GET_CURRENT_LOCALE_EN.inputEmail
                }
            },
        },
        computed: {
            ...mapGetters({
                GET_CURRENT_LOCALE_RU:'translate/GET_CURRENT_LOCALE_RU',
                GET_CURRENT_LOCALE_BY:'translate/GET_CURRENT_LOCALE_BY',
                GET_CURRENT_LOCALE_EN:'translate/GET_CURRENT_LOCALE_EN',
                GET_USERNAME: 'user/GET_USERNAME'
            }),
            username: {
                get() {
                    return this.GET_USERNAME
                },
                set(value) {
                    this.SET_USERNAME(value)
                }
            }
        }
    }
</script>

<style scoped>
    .iconUser {
        width: 32px;
        margin: 0 0 -51px 2px
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
