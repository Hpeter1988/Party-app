import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../stylesheets/App.css';
import Landing from '../Containers/Landing';
import Welcome from './Welcome';
import Test from './test';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
