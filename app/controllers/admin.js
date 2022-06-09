module.exports.formulario_inclusao_noticia = (app, req, res)=> {
    res.render('admin/form_add_noticia.ejs', {validacao:{}, noticia:{}})
}

module.exports.noticias_salvar = (app, req, res)=>{
    
    const noticia = req.body;
    
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve ter entre 10 e 100').len(10,100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();
    
    if(erros){
        console.log(erros);
        res.render('admin/form_add_noticia.ejs', {validacao: erros, noticia: noticia});
        return;
    }

    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.salvarNoticia(noticia, (error, result)=>{
        res.redirect('/noticias');
    });
}