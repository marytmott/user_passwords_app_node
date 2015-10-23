app.get('/', function(req, res) {
  res.redirect('/signup');
});

require('./sessions');

app.get('*', function(req, res) {
  // console.log(req.headers);
  res.redirect('/login');
  // res.redirect('back');
});