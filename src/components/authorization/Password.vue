<template>
    <div>
        <div class="iconPassword">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.24"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M22.8868 14.3081H9.23361V8.67941C9.23361 6.51748 10.9788 4.72134 13.1589 4.6995C15.361 4.67766 17.1612 6.45197 17.1612 8.63028V9.50379C17.1612 10.2299 17.7503 10.814 18.4825 10.814H20.2442C20.9764 10.814 21.5655 10.2299 21.5655 9.50379V8.63028C21.5655 4.04437 17.7944 0.315585 13.1699 0.331963C8.54544 0.348341 4.82936 4.12626 4.82936 8.71217V14.3081H3.50809C2.04918 14.3081 0.86554 15.4818 0.86554 16.9286V25.6637C0.86554 27.1104 2.04918 28.2842 3.50809 28.2842H22.8868C24.3457 28.2842 25.5293 27.1104 25.5293 25.6637V16.9286C25.5293 15.4818 24.3457 14.3081 22.8868 14.3081ZM15.3995 22.6064C15.3995 23.8129 14.4141 24.7902 13.1974 24.7902C11.9808 24.7902 10.9953 23.8129 10.9953 22.6064V19.9859C10.9953 18.7793 11.9808 17.8021 13.1974 17.8021C14.4141 17.8021 15.3995 18.7793 15.3995 19.9859V22.6064Z"
                      fill="black"></path>
            </svg>
        </div>
        <div>
            <input v-model="password" class="inputPass" @input="validatorPass(password)"
                   v-bind:placeholder="passwordTextLang" type="password">
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapMutations} from 'vuex'

    export default {
        data: function () {
            return {
                answer: '',
                passwordTextLang: 'Пароль'
            }
        },
        props: ['selected'],
        watch: {
            selected: function (value) {
                this.setTextPassword(value)
            }
        },
        methods: {
            ...mapMutations({
                SET_PASSWORD: 'user/SET_PASSWORD',
            }),
            validatorPass: function (value) {
                if (value.length < 4 || value.length > 17 || value.match(/[!$@^&*()}{,.;:?'"=+/]/g)) {
                    document.querySelector('.inputPass').style.border = '2px solid red'
                } else {
                    document.querySelector('.inputPass').style.border = '2px solid green'
                }
            },
            setTextPassword(value) {
                if (value === 'Мова') {
                    this.passwordTextLang = this.GET_CURRENT_LOCALE_BY.inputPassword
                } else if (value === 'Язык') {
                    this.passwordTextLang = this.GET_CURRENT_LOCALE_RU.inputPassword
                } else if (value === 'Language') {
                    this.passwordTextLang = this.GET_CURRENT_LOCALE_EN.inputPassword
                }
            }
        },
        computed: {
            ...mapGetters({
                GET_CURRENT_LOCALE_RU:'translate/GET_CURRENT_LOCALE_RU',
                GET_CURRENT_LOCALE_BY:'translate/GET_CURRENT_LOCALE_BY',
                GET_CURRENT_LOCALE_EN:'translate/GET_CURRENT_LOCALE_EN',
                GET_PASSWORD: 'user/GET_PASSWORD'
            }),
            password: {
                get() {
                    return this.GET_PASSWORD
                },
                set(value) {
                    this.SET_PASSWORD(value)
                }
            }
        }
    }
</script>

<style scoped>
    .iconPassword {
        width: 32px;
        margin: 0 0 -51px 4px
    }

    .inputPass {
        width: 100%;
        border: none;
        color: #5E5E5E;
        background-color: rgba(255, 255, 255, 0.62);
        padding: 10px 35px;
        margin: 10px 0 10px 0;
        font-size: 16px;
    }

    .inputPass:focus {
        color: black;
        background-color: rgba(255, 255, 255, 1);
        outline-color: aqua;
    }
</style>
