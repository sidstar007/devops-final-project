const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.get('/status', (req, res) => {
    res.send({ status: 'User Service is running' });
});

router.post('/', createUser);
router.get('/:id', getUser);

module.exports = router;