const {buildSchema} = require('graphql')

module.exports = buildSchema(`
type Post {
  _id: ID!
  title: String!
  content: String!
  imageUrl: String!
  creator: User!
  createdAt: String!
  updatedAt: String!
}

type User {
  _id: ID!
  name: String!
  email: String!
  posts:[Post]!
}

type AuthData{
   token: String!
   userId: String!
}

input UserInputData {
  name: String!
  email: String!
  password: String!
  confirmPassword: String!      
}

type RootMutation {
  createUser(userInput: UserInputData): User!
}

type RootQuery {
  loginData(email: String!, password: String!): AuthData!
}

schema {
    query: RootQuery
    mutation: RootMutation
  }
`)
