import Translate from "../../translate/translate"
const state = {
  languages: Translate
}
const getters = {
  GET_CURRENT_LOCALE: state =>  state.languages
}
export default {
  namespaced: true,
  state,
  getters
}

