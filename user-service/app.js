const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Database connection
mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Conditionally start the server if this file is run directly
if (require.main === module) {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;  // Export the app for testing with Supertest
