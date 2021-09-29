//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-auth'));

// Define the port to run on
app.set('port', 8888);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    next();
});

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-auth/'}),
);

var server = app.listen(process.env.PORT || app.get('port'), function () {
    console.log('Magic started sucessfully');
});