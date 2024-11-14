const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Order = require('../models/Order');

// Extend Jest timeout to handle any slow database connection issues
jest.setTimeout(30000);

describe('Order Service', () => {
  // Connect to the database before running tests
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the Order collection after each test to maintain isolation
  afterEach(async () => {
    await Order.deleteMany({});
  });

  // Close the database connection after all tests complete
  afterAll(async () => {
    // Ensure the connection is closed only if it's still open
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
  });

  it('should create a new order', async () => {
    const res = await request(app).post('/api/orders').send({
      userId: '12345',
      products: [{ productId: '67890', quantity: 2 }],
      totalAmount: 300,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body).toHaveProperty('totalAmount', 300);
    expect(res.body).toHaveProperty('products');
    expect(res.body.products[0]).toHaveProperty('productId', '67890');
    expect(res.body.products[0]).toHaveProperty('quantity', 2);
  });

  it('should get an order by ID', async () => {
    // Insert an order directly into the database
    const order = await Order.create({
      userId: '12345',
      products: [{ productId: '67890', quantity: 2 }],
      totalAmount: 300,
    });

    // Fetch the order by ID
    const res = await request(app).get(`/api/orders/${order._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body).toHaveProperty('totalAmount', 300);
    expect(res.body).toHaveProperty('products');
    expect(res.body.products[0]).toHaveProperty('productId', '67890');
    expect(res.body.products[0]).toHaveProperty('quantity', 2);
  });
});
