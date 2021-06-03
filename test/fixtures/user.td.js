const newUserWithValidData = {
  name: 'testUser',
  email: 'testuser@email.com',
  password: 'TestUser123!',
  passwordConfirmation: 'TestUser123!'
};

const newUserWithInvalidEmail = {
  name: 'invalidTestUser',
  email: 'invalidMail',
  password: 'TestUser123!',
  passwordConfirmation: 'TestUser123!'
};

const newUserWithInvalidPassword = {
  name: 'testUser',
  email: 'testUser@email.com',
  password: 'Password123!',
  passwordConfirmation: 'Password123!'
};

module.exports = {
  newUserWithValidData,
  newUserWithInvalidEmail,
  newUserWithInvalidPassword
};
