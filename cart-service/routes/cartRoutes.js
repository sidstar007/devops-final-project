const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send({ status: 'Cart Service is running' });
});

router.post('/', addToCart);
router.get('/:userId', getCart);

module.exports = router;