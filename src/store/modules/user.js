import router from '../../router'

const state = {
    userEmail: '',
    userPassword: '',
};
const getters = {
    GET_USERNAME: state => state.userEmail,
    GET_PASSWORD: state => state.userPassword
};

const mutations = {
    SET_USERNAME(state, value) {
        state.userEmail = value;
    },
    SET_PASSWORD(state, value) {
        state.userPassword = value;
    }
};

const actions = {
    SET_USERNAME(context) {
        context.commit('SET_USERNAME')
    },
    SET_PASSWORD(context) {
        context.commit('SET_PASSWORD')
    },
    VALID_CREDENTIALS() {
        if (state.userEmail === 'test@gmail.com' && state.userPassword === '123') {
            localStorage.setItem('username',state.userEmail);
            localStorage.setItem('password',state.userPassword);
            router.push('/main')
        } else {
            alert('Неверные учетные данные!')
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
