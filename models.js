const uuid = require('uuid');

function StorageException(message) {
   this.message = message;
   this.name = "StorageException";
}

const BlogPosts = {
  create: function(title, content, author, publishDate) {
    const post = {
      id: uuid.v4(),
      title: title,
      content: content,
      author: author,
      publishDate: publishDate || Date.now()
    };
    this.posts.push(post);
    return post;
  },

  get: function(id=null) {
    let promise = new Promise((resolve, reject) => {
        // Passed an ID
        if (id !== null) {
            const post = this.posts.find(post => post.id === id);
            if (!post) {
                reject(`Post with id ${id} not found`);
            } else {
                resolve(post);
            }
        }

        // All Blog Posts (no ID)
        const posts = this.posts.sort((a, b) => b.publishDate - a.publishDate)
        resolve(posts);
    })
    return promise;
  },

  delete: function(id) {
    const postIndex = this.posts.findIndex(
      post => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    }
  },

  update: function(updatedPost) {
    updatedPost.publishDate = Date.now();
    const {id} = updatedPost;
    const postIndex = this.posts.findIndex(
      post => post.id === updatedPost.id);
    if (postIndex === -1) {
      throw StorageException(
        `Can't update post with id \`${id}\` because it doesn't exist.`)
    }
    this.posts[postIndex] = Object.assign(
      this.posts[postIndex], updatedPost
    );

    return this.posts[postIndex];
  }
};

function createBlogPostsModel() {
  const storage = Object.create(BlogPosts);
  storage.posts = [];
  return storage;
}


module.exports = {BlogPosts: createBlogPostsModel()};