const app = require('../app');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Comment = require('../models/Comment');
const { newCommentWithValidData, testUser } = require('./fixtures/comment.td');
const { generateJWT } = require('../helpers/jwt');

describe('Comments Tests', () => {
  const { email } = testUser;
  let token;

  beforeEach(async () => {
    await User.findOneAndDelete({ email });
    await new User(testUser).save();

    const user = await User.findOne({ email });
    token = await generateJWT(user.id, user.name);
  });

  afterEach(async () => {
    await User.findOneAndDelete({ email });
    await Comment.deleteMany();
  });

  test('should create a comment with valid data', async () => {
    const response = await request(app)
      .post('/api/comments')
      .set('x-token', token)
      .send(newCommentWithValidData)
      .expect(201);

    expect(response.body.ok).toBe(true);
    expect(response.body.comment).not.toBeNull();
  });

  test('should get comments when login', async () => {
    await new Comment(newCommentWithValidData);

    const response = await request(app)
      .get('/api/comments')
      .set('x-token', token)
      .expect(200);

    expect(response.body.ok).toBe(true);
    expect(response.body.comments).not.toBe(null);
  });

  test('should not get comments when not login', async () => {
    await new Comment(newCommentWithValidData);

    const response = await request(app)
      .get('/api/comments')
      .set('x-token', 'invalidtoken')
      .expect(401);

    expect(response.body).toEqual({ ok: false, msg: 'Invalid Token' });
  });
});
