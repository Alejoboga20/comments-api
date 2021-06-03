const invalidEmaiError = {
  ok: false,
  errors: {
    email: {
      value: 'invalidMail',
      msg: 'Email is required',
      param: 'email',
      location: 'body'
    }
  }
};

const invalidPasswordError = {
  ok: false,
  errors: {
    password: {
      value: 'Password123!',
      msg: "Password should not contain 'password' in it",
      param: 'password',
      location: 'body'
    }
  }
};

const incorrectEmailError = {
  ok: false,
  msg: 'User Email incorrect'
};

module.exports = {
  invalidEmaiError,
  invalidPasswordError,
  incorrectEmailError
};
