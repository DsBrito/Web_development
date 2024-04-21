//database is a file that contains the connection to the database

//_id is a internal variable that will be used to generate the id of the notes
//get id() is a function that will return the value of _id and increment it by 1

const sequence = {
  _id: 1,
  get id() {
    return this._id++
  },
}

const products = {}

function saveProduct(product) {
  if (!product.id) product.id = sequence.id

  products[product.id] = product
  return product
}

//get is used to get data
function getProduct(id) {
  return products[id] || {}
}

//values is a function that will return the values of the products
function getProducts() {
  return Object.values(products)
}

//delete is used to delete data
function deleteProduct(id) {
  const product = products[id]
  delete products[id]
  return product
}

//exporting the functions
module.exports = { saveProduct, getProduct, getProducts, deleteProduct }
