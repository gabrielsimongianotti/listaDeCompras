var home = function(application){
    application.get('/',function(req,res){
        
        application.app.controllers.home.index(application,req,res);
    });
};
module.exports = home;