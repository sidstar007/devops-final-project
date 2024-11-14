const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Cart = require('../models/Cart');

// Extend Jest timeout to handle any slow database connection issues
jest.setTimeout(30000);

describe('Cart Service', () => {
  // Connect to the database before running tests
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the Cart collection after each test to maintain isolation
  afterEach(async () => {
    await Cart.deleteMany({});
  });

  // Close the database connection after all tests complete
  afterAll(async () => {
    // Ensure the connection is closed only if it's still open
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  it('should add items to the cart', async () => {
    const res = await request(app).post('/api/cart').send({
      userId: '12345',
      productId: '67890',
      quantity: 2,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body).toHaveProperty('items');
    expect(res.body.items[0]).toHaveProperty('productId', '67890');
    expect(res.body.items[0]).toHaveProperty('quantity', 2);
  });

  it('should get a user cart by user ID', async () => {
    // Insert a cart directly into the database
    await Cart.create({
      userId: '12345',
      items: [{ productId: '67890', quantity: 2 }],
    });

    // Fetch the cart by user ID
    const res = await request(app).get('/api/cart/12345');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body).toHaveProperty('items');
    expect(res.body.items[0]).toHaveProperty('productId', '67890');
    expect(res.body.items[0]).toHaveProperty('quantity', 2);
  });
});
