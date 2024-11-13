const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Product Service running on port 5002'));

module.exports = app;  // for testing