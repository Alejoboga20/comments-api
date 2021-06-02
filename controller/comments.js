const { response } = require('express');
const Comment = require('../models/Comment');

const getComments = async (req, res = response) => {
  try {
    const comments = await Comment.find().populate('user', 'name');

    return res.json({ ok: true, comments: comments });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: 'An error has ocured' });
  }
};

const createComment = async (req, res = response) => {
  const comment = new Comment(req.body);

  try {
    comment.user = req.uid;
    comment.date = new Date();

    const savedComment = await comment.save();

    return res.status(201).json({ ok: true, comment: savedComment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: 'An error has ocured' });
  }
};

const updateComment = async (req, res = response) => {
  const commentId = req.params.id;
  const uid = req.uid;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ ok: false, msg: 'Comment not found' });
    }

    if (comment.user.toString() !== uid) {
      return res
        .status(401)
        .json({ ok: false, msg: 'Not authorized for this change' });
    }

    const newComment = { ...req.body, user: uid };
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      newComment,
      { new: true }
    );

    return res.json({ ok: true, comment: updatedComment });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: 'An error has ocured' });
  }
};

const deleteComment = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteComment'
  });
};

module.exports = { getComments, createComment, updateComment, deleteComment };
