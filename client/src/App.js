import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Alert from './components/Alert';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routing/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/SetAuthToken';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Alert />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </Provider>
    
  );
}

export default App;
