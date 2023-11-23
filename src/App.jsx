import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/router/'}>Home </NavLink>
        <NavLink to={'/router/contact/'}>Contact </NavLink>
      </nav>
      <h1>this is bidyut</h1>
   
      <Outlet />


    </div>
  );
};

export default App;