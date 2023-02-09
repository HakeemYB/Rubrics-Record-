const express = require('express');
const app = express();


// middleware
const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello world form server');
});

app.get('/login', middleware, (req, res) => {
    console.log('hello my ');
    res.send('Hello login form server');
});

app.listen(3001, ()=> {
    console.log('server is running');
})