import {
  FETCH_NAV_SUCESS,
  FETCH_ARTICLELIST_SUCESS}
  from './mutation-type'

const mutations = {
  // 获取导航
  [FETCH_NAV_SUCESS] (state, data) {
    state.navList = data.data
  },
  // 获取列表
  [FETCH_ARTICLELIST_SUCESS] (state, data) {
    state.articleList = data.data
  }
}

export default mutations
