var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./controllers/bookController'));

app.listen(3000);
console.log('Server running ...')