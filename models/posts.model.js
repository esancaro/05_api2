const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: 'title is required',
    minlength: 5
  },
  text: {
    type: String,
    required: 'text is required',
    minlength: 5
  },
  author: {
    type: String,
    required: 'author is required'
  },
}, { 
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret.__v;
      delete ret._id;
      return ret;
    }
  }
});

const Post = mongoose.model('Post', schema);
module.exports = Post;