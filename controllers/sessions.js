var db = require('../models/index');

app.get('/login', function(req, res) {
  res.render('sessions/login', {docTitle: 'Log In'});
});

app.get('/signup', function(req, res) {
  res.render('sessions/signup', {docTitle: 'Create an Account'});
});

app.post('/signup', function(req, res) {
  // res.send(req.body.user);
  db.User.create(req.body.user), function(err, user) {
    if (err) {
      console.log(err);
      res.redirect('/signup');
    } else {
      console.log(user);
      res.send('welcome');
    }
  }
});

app.get('/logout', function(req, res) {

});
