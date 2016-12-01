import {
  FETCH_NAV_SUCESS}
  from './mutation-type'

const mutations = {
  // 获取导航
  [FETCH_NAV_SUCESS] (state, data) {
    state.navList = data.data
  }
}

export default mutations
