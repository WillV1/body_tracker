import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
    </Provider>
    
  );
}

export default App;
