var db = require('./db');

exports.getAllAuthors = function(cb){
    db.query('select * from lms.author', function(err, result) {
        cb(err, result);
      });
};