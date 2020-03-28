import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Reducers & Actions
import rootReducer from './reducers';
import { init } from './actions';

// Components
import LandingPage from './/components/LandingPage';
import Login from './components/Login';


function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    isLoggedIn: false,
    user: null,
    isLoading: false,
    isError: false,
    data: [],
  });

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login dispatch={dispatch} />
          </Route>
          <Route path="/register">
            <h1>Register Page</h1>
          </Route>
          <Route path="/home">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
