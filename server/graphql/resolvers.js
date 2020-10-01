const bcrypt = require('bcryptjs')
const User = require('../model/User')
const Post = require('../model/Post')
const validator = require('validator')
const jwt = require('jsonwebtoken')

let error
module.exports = {
  createUser: async function ({ userInput }, req) {
    const errors = []
    if (!validator.isEmail(userInput.email)) {
      errors.push({ message: 'Email is invalid' })
    }

    if (
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 5 })
    ) {
      errors.push({ message: 'Password too short !' })
    }
    if (userInput.password !== userInput.confirmPassword) {
      errors.push({ message: 'Password too short !' })
    }
    if (errors.length > 0) {
      error = new Error('Invalid input')
      error.data = errors
      error.code = 422
      throw  error
    }

    const existingUser = await User.findOne({ email: userInput.email })

    if (existingUser) {
      error = new Error('User exists already!')
      error.code = 422
      throw  error
    }

    if (userInput.password !== userInput.confirmPassword) {
      error = new Error('Password do not match!')
      throw  error
    }

    const hashedPassword = await bcrypt.hash(userInput.password, 12)

    const user = new User({
      name: userInput.name,
      email: userInput.email,
      password: hashedPassword
    })

    const createdUser = await user.save()

    return {
      ...createdUser._doc,
      _id: createdUser._id.toString()
    }
  },

  loginData: async function ({ email, password }) {
    // console.log(email, password)
    const user = await User.findOne({ email: email })
    if (!user) {
      const error = new Error('User not found')
      error.code = 401
      throw error
    }
    const isEqual = await bcrypt.compare(password, user.password)
    // console.log(isEqual)
    if (!isEqual) {
      const error = new Error('Password is incorrect')
      error.status = 401
      throw error
    }
    const token = jwt.sign({
      userId: user._id,
      email: user.email
    }, 'secretToken', { expiresIn: '1h' })

    return {
      token: token,
      userId: user._id.toString()
    }
  },

  createPost: async function ({ postInput }, req) {
    if (!req.isAuth) {
      const error = new Error('Not authenticated !')
      error.code = 401
      throw error
    }
    const errors = []
    if (validator.isEmpty(postInput.title) || !validator.isLength(postInput.title, { min: 5 })) {
      errors.push('Title is invalid')
    }
    if (validator.isEmpty(postInput.content) || !validator.isLength(postInput.content, { min: 5 })) {
      errors.push({ message: 'Content is invalid' })
    }

    if (errors.length > 0) {
      error = new Error('Invalid input')
      error.data = errors
      error.code = 422
      throw  error
    }
    const user = await User.findById(req.userId)
    if (!user) {
      const error = new Error('Invalid user !')
      error.code = 401
      throw error
    }
    const post = new Post({
      title: postInput.title,
      content: postInput.content,
      imageUrl: postInput.imageUrl,
      creator: user
    })

    const createdPost = await post.save()
    user.posts.push(createdPost)
    user.save()
    return {
      ...createdPost._doc,
      _id: createdPost._id.toString(),
      createdAt: createdPost.createdAt.toString(),
      updatedAt: createdPost.updatedAt.toString(),
    }
  }
}
