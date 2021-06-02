const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser } = require('../controller/auth');
const { isValidPassword } = require('../helpers/isValidPassword');
const { validConfirmPassword } = require('../helpers/validConfirmPassword');
const { validateFields } = require('../middlewares/fieldsValidator');
const router = Router();

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty().trim(),
    check('email', 'Email is required').isEmail().normalizeEmail(),
    check('password').custom(isValidPassword),
    check('passwordConfirmation').custom(validConfirmPassword),
    validateFields
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should be 6 chars long').isLength({ min: 6 }),
    validateFields
  ],
  loginUser
);

module.exports = router;
