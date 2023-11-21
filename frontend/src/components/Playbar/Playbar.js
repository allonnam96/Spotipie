import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Backward } from "../../_imgs/svg/Backward.svg";
import { ReactComponent as Forward } from "../../_imgs/svg/Forward.svg";
import { ReactComponent as Speaker } from "../../_imgs/svg/Speaker.svg";
import { ReactComponent as Pause } from "../../_imgs/svg/Pause.svg";
import { ReactComponent as Play } from "../../_imgs/svg/Play.svg"
import "./Playbar.css";

const Playbar = (imgUrl) => {
    const [isPlaying, setPlay] = useState(false);
    //   duration state
    // const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrenttime] = useState(0);

    const audioPlayer = useRef();
    // const progressBar = useRef(); 
    const animationRef = useRef();

    // useEffect(() => {
    //   const seconds = Math.floor(audioPlayer.current.duration);
    //   setDuration(seconds);

    //   // set max prop with out seconds in input[range]
    //   progressBar.current.max = seconds;
    // }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

    // const changePlayPause = () => {
    //   const prevValue = isPlaying;
    //   setPlay(!prevValue);

    //   if (!prevValue) {
    //     audioPlayer.current.play();
    //     animationRef.current = requestAnimationFrame(whilePlaying);
    //   } else {
    //     audioPlayer.current.pause();
    //     cancelAnimationFrame(animationRef.current);
    //   }
    // };

    // const whilePlaying = () => {
    //   progressBar.current.value = audioPlayer.current.currentTime;
    //   changeCurrentTime();
    //   // need to run more than once
    //   animationRef.current = requestAnimationFrame(whilePlaying);
    // };

    // const calculateTime = (sec) => {
    //   const minutes = Math.floor(sec / 60);
    //   const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    //   const seconds = Math.floor(sec % 60);
    //   const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    //   return `${returnMin} : ${returnSec}`;
    // };

    // const changeProgress = () => {
    //   audioPlayer.current.currentTime = progressBar.current.value;

    //   changeCurrentTime();
    // };

    // const changeCurrentTime = () => {
    //   progressBar.current.style.setProperty(
    //     "--played-width",
    //     `${(progressBar.current.value / duration) * 100}%`
    //   );

    //   setCurrenttime(progressBar.current.value);
    // };

    return (
        <div className="Playbar">
            <div className="img-playbar">
                <img src={imgUrl} alt="" />
            </div>
            <div className="controls">
                <div className="backwardBtn">
                    <Backward />
                </div>
                <div className="playBtn">
                <audio src="/media/cc0-audio/t-rex-roar.mp3"> 
                </audio>
                    <Play />
                </div>
                <div className="forwardBtn">
                    <Forward />
                </div>
            </div>
            <div className="speakerBtn">
                    <Speaker/>
                    <div className="speakRange">
                    </div>
            </div>
            <div className="progressBar">
                <div className="progressBarInner"></div>
            </div>
        </div>
    );
}


export default Playbar;