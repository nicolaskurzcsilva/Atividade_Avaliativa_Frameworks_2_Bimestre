module.exports.noticias = (app, req, res)=>{

    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error, result)=>{
        res.render('noticias/noticias.ejs', {noticias: result});
    });
}
    
module.exports.noticia = (app, req,res)=>{

    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticia((error,result)=>{
        res.render('noticias/noticia.ejs',{noticia:result});
    });
}