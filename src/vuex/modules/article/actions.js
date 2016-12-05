import {commonHttpAction} from '../../common'

export const fetchNavList = ({ commit }, page, count) => {
  const url = '/article/nav'
  const query = ''
  return commonHttpAction({
    url:url,
    query:query,
    sucessCode:'FETCH_NAV_SUCESS'
  },commit)  
}

