const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title : {type: String, required: true},
  content : {type: String, required: true},
  author : {
    firstName : {type: String, required: true},
    lastName : {type: String, required: true}
  },
  timestamp: { type: Date, require: true}
})

blogPostSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`
})

// [*] Add virtual for timestamp >> human-readable format
blogPostSchema.virtual('timestampString').get(function() {
  if (this.timestamp) {
    return `${this.timestamp.getMonth()} / ${this.timestamp.getDate()} / ${this.timestamp.getFullYear()}`
  } else {
    return 'No date'
  }
})

blogPostSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    author: this.authorString,
    title: this.title,
    content: this.content,

// [*] Switch with virtual
    timestamp: this.timestampString
  }
}

// [ ] Add author filter

const BlogPost = mongoose.model('BlogPost', blogPostSchema);


module.exports = { BlogPost };