import Translate from "../../translate/translate"

const state = {
  languages: Translate
};

const getters = {
  GET_CURRENT_LOCALE_RU: state =>  state.languages.ru,
  GET_CURRENT_LOCALE_EN: state =>  state.languages.en,
  GET_CURRENT_LOCALE_BY: state =>  state.languages.by,
};

export default {
  namespaced: true,
  state,
  getters
}

