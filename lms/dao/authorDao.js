var db = require('./db');


// exports.getAllAuthors = function(cb){
//      db.query('select * from lms.author', function(err, result) {
//          cb(err, result);
//        });
//  };


exports.getAllAuthors = function(){
    return new Promise(function(resolve, reject){
        db.query('select * from lms.author', function(err, result){            
            return err ? reject(err) : resolve(result);
        });
    });
};