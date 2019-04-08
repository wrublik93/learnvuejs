<template>
    <div class="mainPage" v-if="showVue()">
        <div class="firstRow">
            <button-main-page :changeMainLang="changeMainLang"></button-main-page>
            <language-main-page :onTranslate="onTranslate"></language-main-page>
        </div>
        <text-main-page></text-main-page>
        <footer-main-page class="footer"></footer-main-page>
    </div>
</template>

<script>
    import Language from './main/Language'
    import Footer from './main/Footer'
    import Button from './main/Button'
    import TextContent from './main/TextContent'
    import router from '../router'

    export default {
        name: 'Main',
        data: function () {
            return {
                changeMainLang: ''
            }
        },
        components: {
            'language-main-page': Language,
            'footer-main-page': Footer,
            'button-main-page': Button,
            'text-main-page': TextContent

        },
        methods: {
            onTranslate(data) {
                this.changeMainLang = data.changeMainLang
            },
            showVue: function () {
                if (localStorage.getItem('roles') === 'admin' || localStorage.getItem('roles') === 'user') {
                    return true
                } else {
                    router.push('/login')
                }
            }
        }
    }
</script>

<style scoped>
    .mainPage {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin: 0;
        min-height: calc(100vh);
        width: 100%;
        background: linear-gradient(47.41deg, #0066B0 0.46%, rgba(130, 212, 197, 0) 100%), radial-gradient(1848.24px at 100% 0%, #6244B8 0%, rgba(64, 35, 126, 0) 100%), radial-gradient(2388.70px at 130.06% 52.06%, #00F0FF 0%, rgba(76, 44, 145, 0) 100%);
    }

    .firstRow {
        display: flex;
        justify-content: flex-end;
    }
</style>
