
import React, { createContext, useContext, useState, useRef } from "react";

const Player = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const play = () => {
    audioPlayer.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioPlayer.current.pause();
    setIsPlaying(false);
  };

  const playNextTrack = () => {
    // Implement logic to play the next track
  };

  const playPreviousTrack = () => {
    // Implement logic to play the previous track
  };

  return (
    <AudioContext.Provider
      value={{
        audioPlayer,
        isPlaying,
        currentTrackIndex,
        play,
        pause,
        playNextTrack,
        playPreviousTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export default Player