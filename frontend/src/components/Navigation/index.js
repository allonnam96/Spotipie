import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Function to generate a random dark color
    const getRandomDarkColor = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 100);
      const lightness = Math.floor(Math.random() * 15 + 5); // Keeping lightness between 10% to 30%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };
    setBackgroundColor(getRandomDarkColor());
  }, []);

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
    <div className="top-nav" style={{ backgroundColor: backgroundColor }}>
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
