module.exports.index = function (application, req, res) {
    res.render("cadastros/cadastro");
}
module.exports.verifica = function (application, req, res) {
    var dados = req.body;

    req.assert('login', 'Email é obrigatorio').notEmpty();
    req.assert('nome', 'Nome é obrigatorio').notEmpty();
    req.assert('senha', 'Senha é obrigatorio').notEmpty();
    req.assert('nSenha', 'Reescreva sua senha').notEmpty();

    var erros = req.validationErrors();
    console.log('\033c');
    console.log(erros);
    console.log("dados ", dados);

    if (erros != '' || dados.senha != dados.nSenha) {
        res.render('cadastros/erroCadastro', { dados: dados });
        return;
    } 
    var cadastro ={
       "email":dados.login,
        "nome":dados.nome,
        "senha":dados.senha
    }
    console.log("cadastro",cadastro);
    var connection = application.config.mySQLConnection();
    var listaModel = new application.app.models.listaModel(connection);
    listaModel.addUsuario(cadastro,function(error,result){
        console.log("error",error);
        if(error !=null){
            res.render('cadastros/erroCadastro', { dados: dados });
            console.log("error error error error");
            return;
        }
        res.redirect("/");
      
    })
}