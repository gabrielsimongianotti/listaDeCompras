module.exports = function (application) {
    application.get('/cadastro', function (req, res) {
        application.app.controllers.cadastros.index(application, req, res);
    });

    application.post('/errocadastro', function (req, res) {
        application.app.controllers.cadastros.verifica(application, req, res);
    });
};
