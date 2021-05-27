const { Router } = require('express');
const { createUser, loginUser } = require('../controller/auth');
const router = Router();

router.post('/new', createUser);

router.post('/', loginUser);

module.exports = router;
