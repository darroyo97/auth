const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/'));
app.use(require('./routes/blogs.js'));
app.use(require('./routes/editblogs.js'));

app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/registration', (req, res) => {
  res.render('registration')
})
app.post('/login', (req, res) => {
  res.render('registration')
})
app.post('/registration', (req, res) => {
  res.send('post registration')
})



app.listen(3000, () => {
  console.log('Listening on 3000');
});
