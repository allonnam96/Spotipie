import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAlbum } from '../../store/album';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ProfileButton from './ProfileButton';

import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);
  const { albumId } = useParams();
  const album = useSelector(getAlbum(albumId));
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Function to generate a random dark color
    const SCROLL_SLACK = 250;
    const ALBUM_TITLE_START_Y = 220;
    const ALBUM_TITLE_SHOW_Y = 300;

    // TODO: change to prevailing album color
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 15 + 5); // Keeping lightness between 10% to 30%

    const getBackgroundColor = (alpha) => {
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    };

    const albumShow = document.getElementById("album-show-container");
    const albumIndex = document.getElementById("tracks-background");
    const albumTitle = document.getElementById("album-title");
    if((!albumShow || !albumTitle) && !albumIndex) return;

    if (albumId) {
      albumShow.style.background = `linear-gradient(to bottom, ${getBackgroundColor(1)} 0%, rgb(15, 15, 15) 50%)`;
      albumTitle.style.opacity = 0;
      
      albumShow.addEventListener("scroll", (e) => {
        const y = e.target.scrollTop;
        const alpha = (y / SCROLL_SLACK) > 1 ? 1 : (y / SCROLL_SLACK);
        setBackgroundColor(getBackgroundColor(alpha));
        
        const titleOpacity = (y - ALBUM_TITLE_START_Y) / (ALBUM_TITLE_SHOW_Y - ALBUM_TITLE_START_Y);
        albumTitle.style.opacity = titleOpacity;
      });
    } else {
      albumIndex.style.background = `linear-gradient(to bottom, ${getBackgroundColor(1)} 0%, rgb(15, 15, 15) 50%)`;
    }


  }, [album]);
  

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
        {album ? <div id="album-title">{album.title}</div> : <div></div>}
        {sessionLinks}
    </div>
  );
}

export default Navigation;
