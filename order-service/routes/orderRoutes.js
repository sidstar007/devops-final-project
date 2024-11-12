const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send({ status: 'Order Service is running' });
});

router.post('/', createOrder);
router.get('/:id', getOrder);

module.exports = router;