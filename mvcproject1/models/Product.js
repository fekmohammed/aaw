
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  // other fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
