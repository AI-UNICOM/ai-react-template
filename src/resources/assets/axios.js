const Config=require('../../../package.json').Config;


const returnResponse = (response)=>{
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  throw new Error(response.statusText)
}
 
const toJson=(response)=> {
  var item=response.json();
   return item;
}

const toSuccess=(item)=>{
    if(item.retMessage){
        return  Promise.reject(item.retMessage);
    }else if(item && ((''+item.retCode==='200')||(''+item.RESP_CODE=='0000')) && item.data){
        return Promise.resolve(item.data);
    }else{
        return  Promise.resolve(item);
    }
}
const getFullUrl=(url)=>{
    let urls=(Config.publicPath+url).split('http://')
    let baseUrl="",pathUrl=urls[0]
    if(urls.length>1){
        baseUrl="http://";
        pathUrl=urls[1].replace(/\/\//,'/');
    }
    return baseUrl+pathUrl;
}
const get=(url)=>{
    return fetch(getFullUrl(url))
}
const post=(url,params,isClean)=>{
    let headers,body;
    if(params){
        if(typeof params ==='string'){
            body=params;
        }else{
            headers={
                'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            };
            if(isClean){
                body=JSON.stringify(params);
            }else{
                body=JSON.stringify({input:params});
            }
        }
    }
    const option={method: 'post'};
    if(headers){
        Object.assign(option,{headers:headers});
    }
    if(body){
        Object.assign(option,{body:body});
    }
    // Object.assign(option,{credentials:'include'});
    
    return fetch(getFullUrl(url),option).then(returnResponse).then(toJson).then(toSuccess).catch((msg)=>{
        console.error("AXIOS",`【 ${msg} 】`)
    });
}
const all=(fetchs)=>{
    if(!(fetchs instanceof Array)){
        fetchs=[fetchs];
    }
    return Promise.all(fetchs);
}

export default {
    get,
    post,
    all
}