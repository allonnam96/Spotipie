import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="signupBtn" to="/signup">Sign up</NavLink>
        <NavLink className="loginBtn" to="/login">Log in</NavLink>
      </>
    );
  }

  return (
    <div className="top-nav">
    <ul>
      <li>
        {/* <NavLink exact to="/">Spotipie</NavLink> */}
        {sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
