module.exports=function(application){
    application.get('/lista', function(req,res){
        application.app.controllers.lista.indexLista(application,req,res);    
    });
};