import {commonHttpAction} from '../../common'

//获取导航列表
export const fetchNavList = ({ commit }) => {
  const url = '/article/nav'
  const query = ''
  return commonHttpAction(commit,{
    url:url,
    query:query,
    sucessCode:'FETCH_NAV_SUCESS'
  })  
}
//获取文章列表
export const fetchArticleList = ({ commit }, page, count) => {
  const url = '/article/list'
  const query = ''
  return commonHttpAction(commit,{
    url:url,
    query:query,
    sucessCode:'FETCH_ARTICLELIST_SUCESS',
    loading:true
  })  
}

