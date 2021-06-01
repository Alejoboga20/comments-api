const { Schema, model } = require('mongoose');

const commentSchema = Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Comment', commentSchema);
