module.exports = function(app){

    app.get('/about', function(req, res){
        res.render("about");
    });

    app.get('/calculo', function(req, res){
        res.render("calculo");
    });

    app.get('/home', function(req, res){
        res.render("home");
    });

    app.get('/correlacao', function(req, res){
        res.render("correlacao");
    });

    app.get('/singup', function(req, res){
        res.render("singup");
    });

};