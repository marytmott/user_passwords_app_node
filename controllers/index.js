app.get('/', function(req, res) {
  res.redirect('/login');
});

require('./sessions');

app.get('*', function(req, res) {
  // console.log(req.headers);
  res.redirect('login');
  // res.redirect('back');
});