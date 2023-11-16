import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink to="/login">Log in</NavLink>
  //       <NavLink to="/signup">Sign up</NavLink>
  //     </>
  //   );
  // }

  return (
    <div className="navigationUser">
      {sessionUser ? (ProfileButton) : (
      <>
        {/* <NavLink exact to="/">Spotipie</NavLink> */}
        <ul>
          <li>
            <NavLink to="/signup">
              <button id="signup" className= "navButton">
                Sign Up
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button id="login" className= "navButton">
                Login
              </button>
            </NavLink>
          </li>
        </ul>
      </>
      )}
    </div>
  );
}

export default Navigation;
