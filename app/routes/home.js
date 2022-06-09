module.exports = (app)=>{  //módulo para a rota home

    app.get('/', (req,res)=>{ //rota para a tela pricipal 
        app.app.controllers.home.index(app, req, res);
    });  
}