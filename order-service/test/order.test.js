const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Order = require('../models/Order');

describe('Order Service', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await Order.deleteMany({});
    await mongoose.connection.close();
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
  });

  it('should get an order by ID', async () => {
    const order = await Order.create({ userId: '12345', products: [{ productId: '67890', quantity: 2 }], totalAmount: 300 });
    const res = await request(app).get(`/api/orders/${order._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
  });
});