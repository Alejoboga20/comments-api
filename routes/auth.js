const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser } = require('../controller/auth');
const router = Router();

router.post('/new', [check('name', 'Name is required').not().isEmpty()], createUser);

router.post('/', loginUser);

module.exports = router;
