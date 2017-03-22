var _= require('lodash-compat');

// var baseURL="http://10.19.9.27:8080/cb2_web";
var baseURL="http://10.20.16.210:8200/cb2_web";

if(IS_PRODUCTION){
    baseURL="";
}
if(IS_TEST){
    baseURL="http://10.20.16.210:8200/cb2_web";
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}
 
function json(response) {
  var item=response.json();
   return item;
    
}
function json2(item){
   if(item&&(+item.retCode===200||+item.RESP_CODE==0000)&&item.data){
        return Promise.resolve(item.data);
    }else{
        return  Promise.resolve(item);
    }

}
module.exports={
    __getfullUrl:function(url){
        // if(this.defaults.baseURL&&this.defaults.baseURL.search(/\/?/)==-1){
        //     url=this.defaults.baseURL+"/"+url;
        // }else{
        //     url=this.defaults.baseURL+url;
        // }\
        url=this.defaults.baseURL+url;
        return url;
    },
    get:function(url){
        url=this.__getfullUrl(url);
        return fetch(url);
    },
    post:function(url,data){
        var headers="",body="";
        var res={};
        url=this.__getfullUrl(url);
        if(data){
            if(typeof data ==="string"){
                //解析
                body=data;
            }else{
                headers={
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;'
                };
                body=JSON.stringify({input:data});
            }
        }
      
        var option={method: 'post'};
        if(headers){
            Object.assign(option,{headers:headers});
        }
        if(body){
            Object.assign(option,{body:body});
        }
        return fetch(url,option).then(status).then(json).then(json2);
    },
    all:function(arr){
        if(!(arr instanceof Array)){
            arr=[arr];
        }
        return Promise.all(arr);
    },
    defaults:{
        baseURL:baseURL
    }
}