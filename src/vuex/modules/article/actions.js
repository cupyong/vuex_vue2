import vue from 'vue'
/**
 * Created by zhengguorong on 16/6/22.
 */
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  let _url
  if (query) {
    _url = `http://localhost:9009/api${url}?${query}`
  } else {
    _url = `http://localhost:9009/api${url}`
  }

  return vue.http.get(_url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}


export const fetchNavList = ({ commit }, page, count) => {
  const url = '/article/nav'
  const query = ''
  return _get({url, query}, commit)
    .then((json) => {
      if (json.code === 0) {
        return commit('FETCH_NAV_SUCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

