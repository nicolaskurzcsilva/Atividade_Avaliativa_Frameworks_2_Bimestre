module.exports = (app)=>{ //módulo para a rota admin

    app.get('/formularioinclusaonoticia',(req,res)=>{ //rota para a tela de inclusão de um formulário
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });  

    app.post('/noticia/salvar', (req,res)=>{
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}