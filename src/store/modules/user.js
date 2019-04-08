import router from '../../router'
import User from '../../users/user'

const state = {
    userEmail: '',
    userPassword: ''
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
        for (var i=0; i<User.userBase.length; i++) {
            if (state.userEmail === User.userBase[i].userEmail && state.userPassword === User.userBase[i].userPassword) {
                localStorage.setItem('username', state.userEmail);
                localStorage.setItem('password', state.userPassword);
                localStorage.setItem('roles', User.userBase[i].userRoles);
                router.push('main');
            }
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

