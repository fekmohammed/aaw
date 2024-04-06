const express = require('express')
const router = express.Router()
const controller = require('../controllers/routesController')
const productController = require('../controllers/productController');

// Route to fetch products

router.get('/', controller.index)
router.get('/client', controller.client)
router.get('/sign_in', controller.sign_in)

router.get('/manager', controller.renderManagerPage);

router.get('/products', productController.renderProductsPage);
router.post('/products', productController.addProduct);


module.exports = router;