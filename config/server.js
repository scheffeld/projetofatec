var express = require('express');
var consign = require('consign');
var events = require('events');
var path = require('path');
var Highcharts = require('highcharts');

var app = express();


var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '../app/public')));
app.set('view engine', 'ejs');
app.set('views', './app/public/views');


app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;