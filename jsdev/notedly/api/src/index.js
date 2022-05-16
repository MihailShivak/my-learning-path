const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const db = require('./db')
const models = require('./models')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const jwt = require('jsonwebtoken')
const helmet = require('helmet')
const cors = require('cors')
const depthLimit = require('graphql-depth-limit')
const {createComplexityLimitRule} = require('graphql-validation-complexity')

// const saltRounds = 10
// const passwordEncrypt = async password => {
//   return await bcrypt.hash(password, saltRounds)
// }
// const checkPassword = async (plainTextPassword, hashedPassword) => {
//   return await bcrypt.compare(hashedPassword, plainTextPassword)
// }
// const generateJWT = await user => {
//   return await jwt.sign({id:user._id}, process.env.JWT_SECRET);
// };
// const validateJWT = await token => {
//   return await jwt.verify(token, process.env.JWT_SECRET)
// }

const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST


const app = express();
db.connect(DB_HOST)
app.use(helmet())
app.use(cors())

const server = new ApolloServer({
   typeDefs,
   resolvers,
   validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
   context: ({req}) => {
    const token = req.headers.authorization
    const user = getUser(token)
    console.log(user) 
    return { models, user };
   }
 });
server.applyMiddleware({app, path:'./api'});

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);

const getUser = token => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error('Session invalid');
    }
  }
}