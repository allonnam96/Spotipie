import React, { useState, useEffect } from 'react';

const useGradientEffect = (album) => {

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (!album) return;

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
    const albumIndex = document.getElementById("album-show-container");
    const albumTitle = document.getElementById("album-title");

    if(!albumShow || !albumTitle || !albumIndex) return;

    albumShow.style.background = `linear-gradient(to bottom, ${getBackgroundColor(1)} 0%, rgb(15, 15, 15) 50%)`;
    albumIndex.style.background = `linear-gradient(to bottom, ${getBackgroundColor(1)} 0%, rgb(15, 15, 15) 50%)`;
    albumTitle.style.opacity = 0;
  
    albumShow.addEventListener("scroll", (e) => {
      const y = e.target.scrollTop;
      const alpha = (y / SCROLL_SLACK) > 1 ? 1 : (y / SCROLL_SLACK);
      setBackgroundColor(getBackgroundColor(alpha));

      const titleOpacity = (y - ALBUM_TITLE_START_Y) / (ALBUM_TITLE_SHOW_Y - ALBUM_TITLE_START_Y);
      albumTitle.style.opacity = titleOpacity;
    });

  }, [album]);
};

export default useGradientEffect;