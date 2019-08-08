import Vue from "vue";
import Vuex from "vuex";
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import audit from './modules/audit'

Vue.use(Vuex);

export default new Vuex .Store({
  actions,
  mutations,
  getters,
  modules:{
    audit
  }
})