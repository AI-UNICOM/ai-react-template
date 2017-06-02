process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_TEST = process.env.NODE_ENV === 'test';
const IS_DEBUG=!IS_PRODUCTION

//获取命令
let order,name,argvs=[],ORDER={};
try {    
    order = JSON.parse(process.env.npm_config_argv).original;
}	
catch(ex) {    
    order = process.argv;
}
if(order[0]==="run"){
    name=order[1]
    argvs=order.slice(2)
}else{
    name=order[0]
    argvs=order.slice(1)
}

argvs=argvs.map(value=>{
    return value.replace(/^--/,'')
})
ORDER={
    name,
    argvs
}

module.exports={
    IS_PRODUCTION,
    IS_TEST,
    IS_DEBUG,
    ORDER
}