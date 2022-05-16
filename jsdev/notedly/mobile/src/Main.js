import React from 'react';
import Screens from './screens';
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import getEnvVars from '../config';
import * as SecureStore from 'expo-secure-store';

const uri = API_URI
const cache = new InMemoryCache()
const httpLink = createHttpLink({uri})
const{ API_URI } = getEnvVars();

const authLink = setContext(async(_,{headers}) => {
  return{
    headers:{
      ...headers,
      authorization:(await SecureStore.getItemAsync('token')) || ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})

const Main = () => {
  return(
    <ApolloProvider client={client}>
      <Screens/>
    </ApolloProvider>
  )
};

export default Main;
