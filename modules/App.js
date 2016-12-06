import React from 'react'
import NavLink from './NavLink';

const App = props => {
  return (
    <div>
      <h1> React Router Tutorial </h1>
      <ul role="nav">
        <li><NavLink to="/" onlyActiveOnIndex={ true }> Home </NavLink> </li>
        <li><NavLink to="/about"> About </NavLink> </li>
        <li><NavLink to="/repos"> Repos </NavLink> </li>
      </ul>
      { props.children }
    </div>
  );
}

export default App;
