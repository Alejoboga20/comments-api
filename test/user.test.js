const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const {
  invalidEmaiError,
  invalidPasswordError,
  incorrectEmailError
} = require('./fixtures/errors.td');
const {
  newUserWithValidData,
  newUserWithInvalidEmail,
  newUserWithInvalidPassword
} = require('./fixtures/user.td');

describe('Signup User Tests', () => {
  beforeEach(async () => await User.deleteMany());

  afterEach(async () => await User.deleteMany());

  test('should signup a new user with valid data', async () => {
    const response = await request(app)
      .post('/api/auth/new')
      .send(newUserWithValidData)
      .expect(201);

    const { uid } = response.body;

    const user = await User.findById(uid);
    expect(user).not.toBeNull();
  });

  test('should not signup a new user with invalid email', async () => {
    const response = await request(app)
      .post('/api/auth/new')
      .send(newUserWithInvalidEmail)
      .expect(400);

    expect(response.body).toEqual(invalidEmaiError);
  });

  test('should not signup a new user with invalid password', async () => {
    const response = await request(app)
      .post('/api/auth/new')
      .send(newUserWithInvalidPassword)
      .expect(400);

    expect(response.body).toEqual(invalidPasswordError);
  });
});

describe('Login User Tests', () => {
  beforeEach(
    async () =>
      await request(app).post('/api/auth/new').send(newUserWithValidData)
  );

  afterEach(async () => await User.deleteMany());

  test('should login with valid credentials', async () => {
    const { email, password } = newUserWithValidData;

    const response = await request(app)
      .post('/api/auth/')
      .send({ email, password })
      .expect(200);

    expect(response.body.token).not.toBeNull();
  });

  test('should not login with invalid credentials', async () => {
    const { email, password } = newUserWithInvalidPassword;

    const response = await request(app)
      .post('/api/auth/')
      .send({ email, password })
      .expect(404);

    expect(response.body).toEqual(incorrectEmailError);
  });
});
