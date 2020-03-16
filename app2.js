let express = require('express');
let app = express();
let sessions = require('express-session');
let cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(sessions(
    {
        secret: 'my puppy',
        cookie: { secure: false }
    }
));
app.get('/', (req, res) => {
    let testGreeting = "hello world";
    req.session.testGreeting = "hello1";
    console.log(req.session.testGreeting);
    res.send('testing')
})
app.get('/test', (req, res) => {
    res.send(req.session.testGreeting)
})
app.listen(3001, () => {
    console.log('listening on port 3001');
})