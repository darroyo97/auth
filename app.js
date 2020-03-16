const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
let db = require('../models')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  res.render('login')
})
app.post('/login', (req, res) => {
  res.send('post login')
})
app.get('/registration', (req, res) => {
  res.render('registration')
})
app.post('/registration', (req, res) => {

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  let passwordEncrypted = bcrypt.hashSync(password, 8);
  db.users.create({
    username: username,
    email: email,
    password: passwordEncrypted
  })
    .then((user) => {
      res.redirect('/login')
    })
  // console.log(passwordEncrypted)
})

app.listen(3000, () => {
  console.log('Listening on 3000');
});
