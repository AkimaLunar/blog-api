const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email : { type: String, required: true },
  password: { type: String, required: true },
  name : {
    firstName : { type: String, required: false },
    lastName : { type: String, required: false }
  },
  bio : { type: String, required: false },
  collections: [
      {
          _id: { type: String, required: true },
          collection: { type: String, required: false },
          posts: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }
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

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name: this.displayName,
    bio: this.bio,
    collections: this.collections
  }
}

const User = mongoose.model('User', userSchema);


module.exports = { User };