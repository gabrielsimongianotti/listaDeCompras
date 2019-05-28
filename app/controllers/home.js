module.exports.index = function(application, req, res){
    res.render("home/index");
}
module.exports.logar = function(application, req, res){
    res.render("home/indexError");
}
