const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : { type: String, required: true },
    type: { type: String, required: true },
    author: {
      userId: { type: String, required: true },
      displayName: { type: String },
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

postSchema.methods.postRepr = function() {
    let _post = {
        _id: this._id,
        title: this.title,
        type: this.type,
        author: {
            userId: this.author.userId,
            displayName: this.author.displayName,
        },
        timestamp: this.timestamp,
        tags: this.tags,
        hearts:this.hearts,
        content: {}
    };
    const _postContent = JSON.parse(this.content);

    if (_post.type === 'blog') {
        _post.content.excerpt = _postContent.excerpt;
        _post.content.html = _postContent.html
    }
    if (_post.type === 'photo') {
        _post.content.photoUrl = _postContent.photoUrl;
        _post.content.description = _postContent.description
    }
    return _post;
}

postSchema.statics.postTypeFactory = function(post) {
    if (post.type === 'blog') {
        return post.blogPostRepr();
    }
    if (post.type === 'photo') {
        return post.photoPostRepr();
    }
}

postSchema.methods.blogPostRepr = function() {
    const _blogPostContent = JSON.parse(this.content);
    return {
         _id: this._id,
        title: this.title,
        type: this.type,
        author: {
            userId: this.author.userId,
            displayName: this.author.displayName,
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
            userId: this.author.userId,
            displayName: this.author.displayName,
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