var http = require('http');
var url = require("url");
var path = require('path');

var express = require('express');
var app = express();

var gui = require('./custom_modules/gui');

var mocha = require('mocha');
var chai = require('chai');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname+'main.js'));

app.listen(8080);