const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/api/cart', cartRoutes);

app.listen(5000, () => console.log('Cart Service running on port 5004'));

module.exports = app;  // for testing