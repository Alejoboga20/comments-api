const { response } = require('express');

const getComments = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getComments'
  });
};

const createComment = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'createComment'
  });
};

const updateComment = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateComment'
  });
};

const deleteComment = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteComment'
  });
};

module.exports = { getComments, createComment, updateComment, deleteComment };
