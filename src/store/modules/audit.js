const state = {
  selected:{}
}
const mutations = {
  SELECTED(state,data){
    state.selected = data
  }
}
const actions = {
  selected(ctx,data){
    ctx.commit('SELECTED',data)
  }
}
export default {
  state,
  mutations,
  actions
}