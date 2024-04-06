const Product = require('../models/Product');

// Controller method to render the products page
exports.renderProductsPage = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('manager', { products }); // Pass the products array to the template
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};


// Controller method to add a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newProduct = new Product({ name, description, price });
        await newProduct.save();
        res.redirect('/manager');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
