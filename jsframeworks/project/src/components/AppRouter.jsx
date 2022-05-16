import React, { useContext } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Posts from '../pages/Posts';
import About from '../pages/About';
import '../styles/App.css';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes, routes } from '../router/routes';
import { AuthContext } from '../context/AuthContext';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  if(isLoading){
    return <Loader/>
  }

   return(
     isAuth
     ?
     <Switch>
        {privateRoutes.map(route =>
          <Route
            component={route.component} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/posts"/>
      </Switch>
     :
     <Switch>
        {publicRoutes.map(route =>
          <Route 
            component={route.component} 
            path={route.path} 
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to="/login"/>
      </Switch>
   );
};


export default AppRouter;