const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Order Service running on port 5003'));

module.exports = app; // for testing