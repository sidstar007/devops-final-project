const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/orders', orderRoutes);

app.listen(5003, () => console.log('Order Service running on port 5003'));

module.exports = app; // for testing