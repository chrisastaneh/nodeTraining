var routes = require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDao');

routes.get('/author',function(req,res){
    authorDao.getAllAuthors(function(error, result){
      if(error) throw error;
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    });
});

module.exports = routes;
