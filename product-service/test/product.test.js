const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Product = require('../models/Product');

describe('Product Service', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  });

  afterAll(async () => {
    await Product.deleteMany({});
    await mongoose.connection.close();
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
  });

  it('should get a product by ID', async () => {
    const product = await Product.create({ name: 'Phone', price: 800, stock: 15 });
    const res = await request(app).get(`/api/products/${product._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Phone');
  });
});