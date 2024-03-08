//port is a process in the computer that is running the server
const port = 8082;

//import
const express = require('express');
const database = require('./database');
const bodyParser = require('body-parser');


//app is a instance of express
const app = express();


//urlencoded is a function that will convert the data to JSON
app.use(bodyParser.urlencoded({ extended: true }));


// get is used to get data
app.get('/product', (req, res, next) => {
    res.send({name: 'Notebook', price: 123.45}); //convert to JSON
    res.send(database.getProducts());

});

app.get('/product/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id));
});


//post is used to insert data
app.post('/product', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
});


//put is used to update data
app.put('/product/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(product);
});

<<<<<<< Updated upstream
//delete is used to delete data
app.delete('/product/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id);
    res.send(product);
});
=======
// //delete is used to delete data
// app.delete('/product/:id', (req, res, next)) => {
//     const product = database.deleteProduct(req.params.id);
//     res.send(product);
// }
>>>>>>> Stashed changes

//listen is used to start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


