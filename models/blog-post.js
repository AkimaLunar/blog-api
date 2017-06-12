const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title : { type: String, required: true },
  type : { type: String, required: true },
  author : {
    userId : {  type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    displayName : { type: String, required: true }
  },
  timestamp: { type: Date, require: true },
  tags: { type: Array, require: false },
  content : { type: String, required: true }
})

blogPostSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    author: this.author.displayName,
    timestamp: this.timestamp,
    tags: this.tags,
    content: this.content,
  }
}

// [ ] Add author filter

const BlogPost = mongoose.model('BlogPost', blogPostSchema);


module.exports = { BlogPost };