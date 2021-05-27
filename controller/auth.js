const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  res.json({ ok: true, msg: 'user created', name, email, password });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.json({ ok: true, msg: 'login', email, password });
};

module.exports = { createUser, loginUser };
