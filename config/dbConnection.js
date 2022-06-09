var mysql=require('mysql');

const connMysql=()=>{
    console.log('Connection BD On!');
    return mysql.createConnection({ 
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias' 
    });
}

module.exports=()=>{
    console.log('Model DB On!');
    return connMysql;
}