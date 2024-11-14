const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

describe('User Service', () => {
  // Connect to the database before running tests
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://24aaryan00:XE1lgXbpxaEs3elB@cluster0.qsbsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clear the User collection after each test to maintain isolation
  afterEach(async () => {
    await User.deleteMany({});
  });

  // Close the database connection after all tests complete
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
      username: 'john_doe', // Ensure unique username
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'John Doe');
    expect(res.body).toHaveProperty('email', 'john@example.com');
  });

  it('should get a user by ID', async () => {
    // Insert a user directly into the database
    const user = await User.create({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: '123456',
      username: 'jane_doe', // Ensure unique username
    });

    // Fetch the user by ID
    const res = await request(app).get(`/api/users/${user._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Jane Doe');
  });
});
