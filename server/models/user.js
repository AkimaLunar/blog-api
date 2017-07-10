const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  auth0_id : { type: String, required: true },
  email : { type: String, required: true },
  name : {
    firstName : { type: String, required: false },
    lastName : { type: String, required: false }
  },
  picture: { type: String, required: false },
  bio : { type: String, required: false },
  collections: [
      {
          _id: { type: String, required: true },
          collection_name: { type: String, required: false },
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