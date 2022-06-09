import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase.config";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { Spinner } from '../components/common/spinner';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoogedIn, setIsLoogedIn ] = useState(false)

  useEffect(() => {
   firebase.auth().onAuthStateChanged( user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoogedIn(true);
      } else {
        setIsLoogedIn(false);
      }
      
      setChecking(false);
   });
  }, [ dispatch, setChecking, setIsLoogedIn ])
  

  if (checking) {
    return <Spinner />
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            path="/auth"
            isAuthenticated={ isLoogedIn }
            component={ AuthRouter }
          />
          <PrivateRoute 
            exact
            isAuthenticated={ isLoogedIn }
            path="/"
            component={ JournalScreen }

          />
          <Redirect 
            to="/auth/login" 
          />
        </Switch>
      </div>
    </Router>
  )
}
