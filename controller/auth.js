const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ ok: false, msg: 'User already exits' });
    } else {
      user = new User(req.body);

      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(password, salt);
      await user.save();
      return res.status(201).json({ ok: true, uid: user.id, name: user.name });
    }
  } catch (e) {
    res.status(500).json({ ok: false, msg: 'User credentials invalid' });
  }
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ ok: true, msg: 'login', email, password });
};

module.exports = { createUser, loginUser };
