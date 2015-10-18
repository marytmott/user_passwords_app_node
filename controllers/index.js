app.get('/', function(req, res) {
  res.redirect('/login');
});

require('./sessions');

app.get('*', function(req, res) {
  res.redirect('back');
});