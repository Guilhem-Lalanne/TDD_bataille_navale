var http = require('http');
var url = require("url");
var gui = require('./gui');
var express = require('express');
var app = express();
var path = require('path');

var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  console.log(page);

  /*res.writeHead(200);
  if (page == '/') {

    res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    //gui.direBonjour();

  }

  else if (page == '/sous-sol') {

    res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');

  }

  else if (page == '/etage/1/chambre') {

    res.write('Hé ho, c\'est privé ici !');

  }*/
  
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + './index.html'));
  });

  res.end();

});


server.listen(8080);