const express = require('express');
const { createProduct, getProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send({ status: 'Product Service is running' });
});

router.post('/', createProduct);
router.get('/:id', getProduct);

module.exports = router;