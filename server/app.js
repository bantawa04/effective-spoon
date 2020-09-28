//Import packages
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8080
const { graphqlHTTP } = require('express-graphql')

//import files
const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolvers')
//use packages
const app = express()
const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5kncb.gcp.mongodb.net/${process.env.DB_NAME}`

//Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError (err) {
      if (!err.originalError) {
        return err
      }
      const data = err.originalError.data
      const message = err.message
      const code = err.originalError.code
      return {
        message: message,
        status: code,
        data: data
      }
    }
  })
)

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

//connect and start server
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => {
  const server = app.listen(port)
}).catch(err => {
  console.log(err)
})
