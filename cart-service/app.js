const express = require('express');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/cart', cartRoutes);

app.listen(5000, () => console.log('Cart Service running on port 5004'));

module.exports = app;  // for testing