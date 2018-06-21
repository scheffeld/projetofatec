var app = require('./config/server');
var porta = process.env.PORT || 4000;

app.listen(porta, function(){
    console.log("Servidor ON")
});