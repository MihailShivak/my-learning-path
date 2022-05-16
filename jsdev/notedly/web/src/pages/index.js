import React, { Component } from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";

const IS_LOGGED_IN = gql`
   {
      isLoggedIn @client
   }
`
const PrivateRoute = ({ component: Component, ...rest }) => {
   const {loading, error, data} = useQuery(IS_LOGGED_IN);
   if (loading) return <p>Loading...</p>
   if(error) return <p>Error!</p>
   return(
      <Route
         {...rest}
         render={props => 
            data.isLoggedIn === true ? (
               <Component {...props}/>
            ) : (
               <Redirect
                  to={{
                     pathname: '/signin',
                     state: { from: props.location }
                  }}
               />
            )
         }
      />
   )
}

import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import Note from "./notes";
import Layout from "../components/Layout";
import SignUp from "./signup";
import SignIn from "./signin";
import NewNote from "./new";
import EditNote from "./edit";

const Pages = () => {
   return(
      <Router>
         <Layout>
            <Route path="/mynotes" component={MyNotes} />
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/note/:id" component={Note}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/new" component={NewNote}/>
            <PrivateRoute path="/edit/:id" component={EditNote}/>
         </Layout>
      </Router>
   )
}

export default Pages;