var app = require('./config/server')
var porta = 3000;
app.listen(porta,function(){
    console.log("server ON porta: "+porta);
})