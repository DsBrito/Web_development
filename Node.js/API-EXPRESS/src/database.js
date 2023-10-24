//database is a file that contains the connection to the database


//_id is a internal variable that will be used to generate the id of the notes
//get id() is a function that will return the value of _id and increment it by 1

const sequence = {
    _id: 1,
    get id() { return this._id++ }
};



const products = {};

function saveProduct(product) {
    if (!product.id) 
        product.id = sequence.id;

    products[product.id] = product;
    return product;
};

function getProduct(id) {
    return products[id] || {};
};

function getProducts() {
    return Object.values(products);
};

//exporting the functions
module.exports = { saveProduct, getProduct, getProducts };


