import React, { createContext, useState, useEffect } from 'react';

export const BackgroundColorContext = createContext();

export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const getRandomDarkColor = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 100);
      const lightness = Math.floor(Math.random() * 15 + 5); // Keeping lightness between 10% to 30%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    setBackgroundColor(getRandomDarkColor());
  }, [dispatch]);

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};
