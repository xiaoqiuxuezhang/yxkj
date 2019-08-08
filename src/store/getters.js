import audit from './modules/audit'
const getters = {
  selected(state){
    return audit.state.selected
  }
}
export default getters;