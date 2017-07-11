const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  auth0_id : { type: String, required: true },
  email : { type: String, required: true },
  name : {
    firstName : { type: String },
    lastName : { type: String }
  },
  picture: { type: String },
  bio : { type: String },
  collections: [
      {
          _id: { type: String },
          collection_name: { type: String },
          posts: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
          ]
      }
  ],
  following : [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ]
})

userSchema.virtual('displayName').get(function() {
  return `${this.name.firstName} ${this.name.lastName}`
})

userSchema.methods.authorRepr = function() {
  return {
    userId: this.auth0_id,
    displayName: this.displayName,
  }
}

userSchema.methods.apiRepr = function() {
  return {
    _id: this.auth0_id,
    email: this.email,
    name: {
      firstName: this.name.firstName,
      lastName: this.name.lastName
    },
    picture: this.picture,
    bio: this.bio,
    collections: this.collections,
    following: this.following,
    // @TODO find all users that follow this user
    followers: ['0']
  }
}

const User = mongoose.model('User', userSchema);


module.exports = { User };