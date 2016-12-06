import React from 'react';
import { withRouter } from 'react-router'
import NavLink from './NavLink';

const Repos = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    props.router.push(path);
  };

  console.log('props: ', props)
  return (
    <div> 
      <h1>Repos </h1>
      <ul>
        <li> <NavLink to="/repos/reactjs/react-router"> React Router </NavLink> </li>
        <li> <NavLink to="/repos/facebook/react"> React </NavLink> </li>
        <li> 
          <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="repo"/>
            <button type="submit"> Go </button>
        </form></li>
      </ul>
      {props.children}
    </div>
  );
};

export default withRouter(Repos);
