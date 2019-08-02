import React from 'react';
import { NavLink } from 'react-router-dom';

const navLanding = () => (
  <div className="header">
    <ul>
      <li className="return"><NavLink to="/return">Aleardy created a party</NavLink></li>
      <li className="host"><NavLink to="/host">Created a party</NavLink></li>
      <li className="guest"><NavLink to="/guest">Find a party</NavLink></li>
    </ul>
  </div>
);

export default navLanding;
