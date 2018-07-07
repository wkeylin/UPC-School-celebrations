import http from './request.js'
import qs from 'qs'

const api = {
  nav: () => http.post('/_wp3services/generalQuery?queryObj=columns', qs.stringify({
    siteId: 100,
    scope: 1,
    columnId: 873,
    rtProp:1,
    conditions:JSON.stringify([
      {filed:"id",value:"875",judge:"="}
    ])
  })),
  list: (id,page) => http.post('/_wp3services/generalQuery?queryObj=articles', qs.stringify({
    siteId: 100,
    columnId: id,
    pageIndex: page,
    rows: 11,
    returnInfos: JSON.stringify([
      {name: "title"},
      {name: "url"},
      {name: "content"}, 
      {name: "summary"},
      {name:"mircImgPath"},
      {name:"id"},
      { name: "coverImgPath" },
      { name: "subTitle" }
    ]),
    conditions: JSON.stringify([{
      field: 'publishTime',
      value: "2018-07-01 10:50",
      judge: '>='
    }])
  })),
  article: (title,col) => http.post('/_wp3services/generalQuery?queryObj=articles', qs.stringify({
    siteId: 100,
    columnId: col,
    pageIndex: 1,
    rows: 14,
    returnInfos: JSON.stringify([
      {name: "title"},
      {name: "url"},
      {name: "content"}, 
      {name: "summary"},
      {name:"mircImgPath"},
      {name:"id"}
    ]),
    conditions: JSON.stringify([{
      field: 'title',
      value: title,
      judge: '='
    }])
  })),
}
export default api
