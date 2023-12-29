
// import React, { createContext, useContext, useState, useRef } from "react";

// const Player = createContext();

// export function useAudio() {
//   return useContext(AudioContext);
// }

// export function AudioProvider({ children }) {
//   const audioPlayer = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const play = () => {
//     audioPlayer.current.play();
//     setIsPlaying(true);
//   };

//   const pause = () => {
//     audioPlayer.current.pause();
//     setIsPlaying(false);
//   };

//   const playNextSong = () => {

//   };

//   const playPreviousSong = () => {

//   };

//   return (
//     <AudioContext.Provider
//       value={{
//         audioPlayer,
//         isPlaying,
//         currentSongIndex,
//         play,
//         pause,
//         playNextSong,
//         playPreviousSong,
//       }}
//     >
//       {children}
//     </AudioContext.Provider>
//   );
// }

// export default Player