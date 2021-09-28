var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist/angular-auth'));

const path = require('path');

app.use(express.json());

// Define the port to run on
app.set('port', 8888);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    next();
});

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/angular-auth/index.html'));
});

var server = app.listen(process.env.PORT || app.get('port'), function () {
    console.log('Magic started sucessfully');
});