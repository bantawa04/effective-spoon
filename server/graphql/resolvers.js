const bcrypt = require('bcryptjs')
const User = require('../model/User')
const validator = require('validator')
const jwt = require('jsonwebtoken')

let error
module.exports = {
  createUser: async function ({ userInput }, req) {
    console.log(userInput)
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
  }
}
