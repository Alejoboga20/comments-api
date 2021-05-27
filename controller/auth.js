const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({ ok: true, msg: 'user created', name, email, password });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ ok: true, msg: 'login', email, password });
};

module.exports = { createUser, loginUser };
