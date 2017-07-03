const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : { type: String, required: true },
    type: { type: String, required: true },
    author: {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      displayName: { type: String, required: true },
    },
    timestamp: { type: Date, required: true },
    tags: [
        { type: String, required: true }
    ],
    hearts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    content: { type: String, required: true }
})

postSchema.methods.blogPostRepr = function() {
    const _blogPostContent = JSON.parse(this.content);
    return {
         _id: this._id,
        title: this.title,
        type: this.type,
        author: {
            userId: this.userId,
            displayName: this.displayName,
        },
        timestamp: this.timestamp,
        tags: this.tags,
        hearts:this. hearts,
        content: {
            excerpt: _blogPostContent.excerpt,
            html: _blogPostContent.html
        }
    }
}

postSchema.methods.photoPostRepr = function() {
    const _photoPostContent = JSON.parse(this.content);
    return {
         _id: this._id,
        title: this.title,
        type: this.type,
        author: {
            userId: this.userId,
            displayName: this.displayName,
        },
        timestamp: this.timestamp,
        tags: this.tags,
        hearts:this. hearts,
        content: {
            photoUrl: _photoPostContent.photoUrl,
            description: _photoPostContent.description
        }
    }
}

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };