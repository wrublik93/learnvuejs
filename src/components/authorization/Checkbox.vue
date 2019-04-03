<template>
    <div class="checkbox md-2">
        <input type="checkbox" id="checkboxSave">
        <span for="checkboxSave">{{ checkboxTextLang }}</span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Checkbox',
        data: function () {
            return {
                checkboxTextLang: 'Запомнить'
            }
        },
        props: ['selected'],
        watch: {
            selected: function (value) {
                this.setTextCheckbox(value)
            },
        },
        methods: {
            setTextCheckbox(value) {
                if (value === 'Мова') {
                    this.checkboxTextLang = this.GET_CURRENT_LOCALE_BY.checkboxName
                } else if (value === 'Язык') {
                    this.checkboxTextLang = this.GET_CURRENT_LOCALE_RU.checkboxName
                } else if (value === 'Language') {
                    this.checkboxTextLang = this.GET_CURRENT_LOCALE_EN.checkboxName
                }
            }
        },
        computed: {
            ...mapGetters({
                GET_CURRENT_LOCALE_RU:'translate/GET_CURRENT_LOCALE_RU',
                GET_CURRENT_LOCALE_BY:'translate/GET_CURRENT_LOCALE_BY',
                GET_CURRENT_LOCALE_EN:'translate/GET_CURRENT_LOCALE_EN'
            })
        }
    }
</script>

<style scoped>
    .md-2 {
        width: 20%;
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
</style>
