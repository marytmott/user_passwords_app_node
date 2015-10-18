var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');
// var session = require('cookie-session');

app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('method'));

require('./controllers/index');

app.listen(3000, function() {
  console.log('server listening on port 3000');
});