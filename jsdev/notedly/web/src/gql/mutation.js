import { gql } from "@apollo/client";

const EDIT_NOTE = gql`
   mutation updateNote($id: ID!, $content: String!){
      updateNote(id: $id, content: $content){
         id
         content
         createdAt
         favoriteCount
         favoritedBy{
            id
            username
         }
         author{
            id
            username
         }
      }
   }
`
const DELETE_NOTE = gql`
   mutation deleteNote(4id: ID!){
      deleteNote(id: $id)
   }
`
const NEW_NOTE = gql`
   mutation newNote($content: String!){
      newNote(content: $content){
         id
         content
         createdAt
         favoriteCount
         favoritedBy{
            id
            username
         }
         author{
            username
            id
         }
      }
   }
`
const TOGGLE_FAVORITE = gql`
   mutation toggleFavorite($id: ID!){
      toggleFavorite(id: $id){
         id
         favoriteCount
      }
   }
`
const SIGNIN_USER = gql`
   mutation signIn($email: String, $password: String!){
      signIn(email: $email, password: $password)
   }
`
const SIGNUP_USER = gql`
   mutation signUp($email: String!, $username: String!, $password: String!){
      signUp(email: $email, username: $username, password: $password)
   }
`

export {
   EDIT_NOTE,
   NEW_NOTE,
   DELETE_NOTE,
   TOGGLE_FAVORITE,
   SIGNIN_USER,
   SIGNUP_USER
};