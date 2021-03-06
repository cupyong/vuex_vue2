/**
 * Created by zhengguorong on 16/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    article
  },
  strict: debug
})
