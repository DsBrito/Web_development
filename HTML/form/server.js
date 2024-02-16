const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

app.post('/user/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('User updated');
});

app.listen(3003);
