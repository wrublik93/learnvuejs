import User from "../../translate/user"
const state = {
  userData: User
}
const getters = {
  GET_USER: state =>  state.userData
}
export default {
  namespaced: true,
  state,
  getters
}
