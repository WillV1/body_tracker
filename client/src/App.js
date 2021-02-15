import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Routes from './routing/Routes';

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
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route component={Routes} />
      </Switch>
    </Router>
    </Provider>
    
  );
}

export default App;
