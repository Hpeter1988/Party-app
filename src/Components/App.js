import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import '../stylesheets/App.css';
import Welcome from './Welcome';
import Test from './test';
import UserLanding from './UserLanding';
import UserWelcome from './UserWelcome';
import Return from './return';
import navLanding from './landingPage';
import { history } from '../store/configureStore';


const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={navLanding} />
        <Route exact path="/return" component={Return} />
        <Route exact path="/myparty" component={Welcome} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/host" component={UserLanding} />
        <Route exact path="/guest" component={UserWelcome} />
      </Switch>
    </div>
  </Router>
);

export default App;
