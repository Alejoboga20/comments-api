const validConfirmPassword = (confirmPassword, { req }) => {
  if (confirmPassword !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }

  return true;
};

module.exports = { validConfirmPassword };
