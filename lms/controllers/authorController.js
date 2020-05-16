var routes = require('express').Router();
var authorDao = require('../dao/authorDao');

routes.get('/author',function(req,res){
   
    //  authorDao.getAllAuthors(function(error, result){
    //    if(error) throw error;
    //    res.setHeader('Content-Type', 'application/json');
    //    res.send(result);
    //  });

    authorDao.getAllAuthors()
      .then(function(result){
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
        console.log("using promise instead of callback");
      })
      .catch(function(err){
        throw err;
      });
});

module.exports = routes;
