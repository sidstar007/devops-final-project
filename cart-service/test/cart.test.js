const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Cart = require('../models/Cart');

describe('Cart Service', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await Cart.deleteMany({});
    await mongoose.connection.close();
  });

  it('should add items to the cart', async () => {
    const res = await request(app).post('/api/cart').send({
      userId: '12345',
      productId: '67890',
      quantity: 2,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body.items[0]).toHaveProperty('productId', '67890');
    expect(res.body.items[0]).toHaveProperty('quantity', 2);
  });

  it('should get a user cart by user ID', async () => {
    await Cart.create({ userId: '12345', items: [{ productId: '67890', quantity: 2 }] });
    const res = await request(app).get('/api/cart/12345');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId', '12345');
    expect(res.body.items[0]).toHaveProperty('productId', '67890');
  });
});
