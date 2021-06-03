const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const { newUser } = require('./fixtures/user.td');

describe('User Tests', () => {
  beforeEach(async () => await User.deleteMany());

  afterEach(async () => await User.deleteMany());

  test('should signup a new user with valid credentials', async () => {
    const response = await request(app)
      .post('/api/auth/new')
      .send(newUser)
      .expect(201);

    const { uid } = response.body;

    const user = await User.findById(uid);
    expect(user).not.toBeNull();
  });
});
