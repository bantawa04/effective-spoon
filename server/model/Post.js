const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  // author: {
  //   type: Schema.Types.ObjectID,
  //   ref: 'users',
  //   required: true
  // }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)

