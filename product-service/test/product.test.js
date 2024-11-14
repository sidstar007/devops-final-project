const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Product = require('../models/Product');

// Extend Jest timeout to handle any slow database connection issues
jest.setTimeout(30000);

describe('Product Service', () => {
  // Connect to the database before running tests
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the Product collection after each test to maintain isolation
  afterEach(async () => {
    await Product.deleteMany({});
  });

  // Close the database connection after all tests complete
  afterAll(async () => {
    // Ensure the connection is closed only if it's still open
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  it('should create a new product', async () => {
    const res = await request(app).post('/api/products').send({
      name: 'Laptop',
      price: 1500,
      stock: 10,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Laptop');
    expect(res.body).toHaveProperty('price', 1500);
    expect(res.body).toHaveProperty('stock', 10);
  });

  it('should get a product by ID', async () => {
    // Insert a product directly into the database
    const product = await Product.create({ name: 'Phone', price: 800, stock: 15 });

    // Fetch the product by ID
    const res = await request(app).get(`/api/products/${product._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Phone');
    expect(res.body).toHaveProperty('price', 800);
    expect(res.body).toHaveProperty('stock', 15);
  });
});