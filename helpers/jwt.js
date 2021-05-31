const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      process.env.SECREET_JWT_SEED,
      { expiresIn: '1800s' },
      (error, token) => {
        error ? reject('token not generated') : resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
