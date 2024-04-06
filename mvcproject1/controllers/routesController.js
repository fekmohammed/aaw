
const sign_in = (req, res) =>{
    res.render('auth/sign_in')
}
// const manager = (req, res) => {
//     res.render('manager')
// }
const index = (req, res) => {
    res.render('index')
}
const client = (req, res) => {
    res.render('client')
}
// const product = (req, res) => {
//     res.render('products')
// }
const Product = require('../models/Product');

// Controller method to render the manager page
const renderManagerPage = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('manager', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    sign_in, index, renderManagerPage,client
}
// Import the Product model


exports.getClientPage = async (req, res) => {
  try {
    // Fetch products from the database
    const products = await Product.find();

    // Render the client page and pass the products data to the template
    res.render('client', { products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
