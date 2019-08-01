import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../stylesheets/App.css';
import Landing from './Landing';
import Welcome from './Welcome';
import Test from './test';
import UserLanding from './UserLanding';
import UserWelcome from './UserWelcome';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/userlanding" component={UserLanding} />
        <Route exact path="/userwelcome" component={UserWelcome} />
      </Switch>
    </div>
  </Router>
);

export default App;
