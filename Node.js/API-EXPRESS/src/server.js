//port is a process in the computer that is running the server
const port = 8082;

const express = require('express');
const app = express();

//services
app.get('/product', (req, res, next) => {
    res.send({name: 'Notebook', price: 123.45}); //convert to JSON
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


