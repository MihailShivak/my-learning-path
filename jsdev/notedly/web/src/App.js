import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import {setContext} from 'apollo-link-context';

const uri = process.env.API_URI;
const cache = new InMemoryCache()
const httpLink = createHttpLink({uri})

const authLink = setContext((_,{headers}) => {
   return{
      headers:{
         ...headers,
         authorization: localStorage.getItem('token') || ''
      }
   }
})

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache,
   resolvers:{},
   connectToDevTools: true
})
const data = {
   isLoggedIn: !!localStorage.getItem('token')
}
cache.writeData({data})
client.onResetStore(() => cache.writeData({data}))

import Pages from './pages'

const App=() =>{
   return(
      <ApolloProvider client={client}>
         <GlobalStyle/>
         <Pages />
      </ApolloProvider>
   )
}


ReactDOM.render(<App />, document.getElementById('root'));