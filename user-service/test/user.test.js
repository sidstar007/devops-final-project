const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

describe('User Service', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await User.deleteMany({}); // Cleanup users created during tests
    await mongoose.connection.close(); // Close DB connection
  });

  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'John Doeee',
      email: 'john@eeexample.com',
      password: '123123456',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'John Doeee');
    expect(res.body).toHaveProperty('email', 'john@eeexample.com');
  });

  it('should get a user by ID', async () => {
    const user = await User.create({ name: 'John Doee', email: 'john@eeexample.com', password: '123123456' });
    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Jane Doe');
  });
});
