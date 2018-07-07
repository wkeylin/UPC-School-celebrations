import $ from "jquery";

export function list(id, page) {
  var returnInfosdata = [{
      name: "title"
    },
    {
      name: "visitCount"
    },
    {
      name: "url"
    },
    {
      name: "content"
    },
    {
      name: "imgPath"
    },
    {
      name: "coverImgPath"
    },
    {
      name: "subTitle"
    }
  ];
  var conditdata = [{
    field: "publishTime",
    value: "2018-07-01 10:50",
    judge: ">="
  }];
  var returnInfos = JSON.stringify(returnInfosdata);
  var conditions = JSON.stringify(conditdata);
  return new Promise((resolve, reject) => {
    $.ajax({
        url: "/_wp3services/generalQuery?queryObj=articles",
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        async: false,
        dataType: "json",
        data: {
          siteId: 100,
          columnId: id,
          pageIndex: page,
          rows: 10,
          conditions: conditions,
          returnInfos: returnInfos
        },
        success: result => {
            resolve(result.data, this)
        },  
        error:()=>{
            reject("错误",this);
        }
      });
  })
}
