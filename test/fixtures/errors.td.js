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

module.exports = { invalidEmaiError, invalidPasswordError };
