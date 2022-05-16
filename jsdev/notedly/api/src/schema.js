const {gql} = require('apollo-server-express')

module.exports = gql`
   scalar DateTime
   type Query{
      hello: String!
      notes:[Note!]!
      note(id:ID!): Note!
      user(username: String!):
      User users:[User!]!
      me: User!
      noteFeed(cursor:String): NoteFeed
   }
   type Note{
      id: ID!
      content: String!
      author: User!
      createdAt: DateTime!
      updatedAt: DateTime!
      favoriteCount: Int!
      favoritedBy: [User!]
      notes:[Note]!
      cursor: String!
      hasNextPage: Boolean!
   }
   type Mutation{
      newNote(content: String!): Note!
      updateNote(id:ID!, content:String!): Note!
      deleteNote(id: ID!): Boolean!
      signUp(username: String!, email: String!, password: String!): String!
      signIn(username: String!, email: String!, password: String!): String!
      toggleFavorite(id:ID!):Note!
   }
   type User{
      id: ID!
      username: String!
      email: String!
      avatar: String!
      notes: [Note!]!
      favorites: [Note!]!
   }
`