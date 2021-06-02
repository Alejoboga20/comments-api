const validator = require('validator');

const passwordRequirements = {
  minLength: 7,
  maxLenght: 20,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1
};

const isValidPassword = (password) => {
  const isValidPassword = validator.isStrongPassword(
    password,
    passwordRequirements
  );

  if (!isValidPassword) {
    throw new Error(
      'Password should contain an uppercase, one number, one symbol and be between 7 to 20 characters long'
    );
  }

  const normalizedPassword = password.toLowerCase();

  if (normalizedPassword.includes('password')) {
    throw new Error("Password should not contain 'password' in it");
  }

  return true;
};

module.exports = { isValidPassword };
