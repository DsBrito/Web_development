//port is a process in the computer that is running the server
const port = 8082;

//import
const express = require('express');
const database = require('./database');

const app = express();

// get services
app.get('/product', (req, res, next) => {
    res.send({name: 'Notebook', price: 123.45}); //convert to JSON
    res.send(database.getProducts());

});

app.get('/product/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id));
});


//send a save request
app.post('/product', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


