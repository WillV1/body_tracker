import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Alert from '../components/Alert';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import ProfileForm from '../pages/ProfileForm';
import EditProfile from '../pages/EditProfile';
import CheckIn from '../pages/CheckIn';
import Chart from '../pages/Chart';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create-profile" component={ProfileForm} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/check-in" component={CheckIn} />
        <PrivateRoute path="/chart" component={Chart} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
}

export default Routes;