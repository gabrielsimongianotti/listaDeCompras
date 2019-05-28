function Lista(connection){
    this._connection = connection;
}
Lista.prototype.addUsuario = function(user, callback){
    var comando ='insert into usuarios set ?';
    this._connection.query(comando,user,callback);
}
Lista.prototype.login = function(dados,callback){
    var comando ='SELECT * FROM usuarios WHERE email ='+dados.login + 'and senha='+dados.senha;
    this._connection.query(comando,callback);
}
module.exports = function(){
    return Lista;
}