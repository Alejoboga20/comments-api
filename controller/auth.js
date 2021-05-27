const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.json({ ok: true, msg: 'user created', name, email, password });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.json({ ok: true, msg: 'login', email, password });
};

module.exports = { createUser, loginUser };
