const { Router } = require('express');
const { check } = require('express-validator');
const {
  getComments,
  createComment,
  updateComment,
  deleteComment
} = require('../controller/comments');
const { validateFields } = require('../middlewares/fieldsValidator');
const { validateJwt } = require('../middlewares/validateJwt');

const router = Router();

router.use(validateJwt);

router.get('/', getComments);

router.post(
  '/',
  [check('body', 'Comment can not be empty').not().isEmpty(), validateFields],
  createComment
);

router.put(
  '/:id',
  [check('body', 'Comment can not be empty').not().isEmpty(), validateFields],
  updateComment
);

router.delete('/:id', deleteComment);

module.exports = router;
