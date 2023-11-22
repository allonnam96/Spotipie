import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Backward } from "../../_imgs/svg/Backward.svg";
import { ReactComponent as Forward } from "../../_imgs/svg/Forward.svg";
import { ReactComponent as Speaker } from "../../_imgs/svg/Speaker.svg";
import { ReactComponent as Pause } from "../../_imgs/svg/Pause.svg";
import { ReactComponent as Play } from "../../_imgs/svg/Play.svg";
import { getTracks } from "../../store/track";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Playbar.css";
import { togglePlaying } from "../../store/session";

const Playbar = () => {
    const isPlaying = useSelector(state => state.session.isPlaying);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { albumId } = useParams();
    const tracks = useSelector(getTracks(albumId));
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // Keep track of the current track index

    const audioPlayer = useRef();
    const progressBar = useRef();
    const dispatch = useDispatch(); // Add useDispatch to get access to dispatch

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
    }, [audioPlayer?.current?.duration]);

    const changePlayPause = () => {
        if (!isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
        dispatch(togglePlaying()); // Dispatch the togglePlaying action
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changeCurrentTime();
    };

    const calculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMin = minutes < 10 ? `${minutes}` : `${minutes}`;
        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnMin}:${returnSec}`;
    };

    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changeCurrentTime();
    };

    const changeCurrentTime = () => {
        progressBar.current.style.width = `${(progressBar.current.value / duration) * 100}%`;
        setCurrentTime(progressBar.current.value);
    };

    // Function to play the previous track
    const playPreviousTrack = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
            audioPlayer.current.src = tracks[currentTrackIndex - 1].url;
            audioPlayer.current.play();
        }
    };

    // Function to play the next track
    const playNextTrack = () => {
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
            audioPlayer.current.src = tracks[currentTrackIndex + 1].url;
            audioPlayer.current.play();
        }
    };

    return (
        <div className="footer">
            <div className="img-playbar"></div>
            <div className="playbar">
                <div className="controls">
                    <audio preload="metadata" ref={audioPlayer} onTimeUpdate={whilePlaying} />
                    <div className="alignment-buttons">
                        <div className="backwardBtn" onClick={playPreviousTrack}>
                            <Backward />
                        </div>
                        <div className="playPause" onClick={changePlayPause}>
                            {isPlaying ? (
                                <div className="pauseBtn">
                                    <Pause />
                                </div>
                            ) : (
                                <div className="playBtn">
                                    <Play />
                                </div>
                            )}
                        </div>
                        <div className="forwardBtn" onClick={playNextTrack}>
                            <Forward />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="currentTime">
                    {duration && !isNaN(duration) ? calculateTime(currentTime) : "0:00"}
                    </div>
                    <input
                        type="range"
                        className="progressBar"
                        ref={progressBar}
                        defaultValue="0"
                        max={duration}
                        onChange={changeProgress}
                    />
                    <div className="duration">
                        {duration && !isNaN(duration) ? calculateTime(duration) : "0:00"}
                    </div>
                </div>
            </div>
            <div className="speakerBtn">
                <Speaker />
                <div className="speakRange">------</div>
            </div>
        </div>
    );
};

export default Playbar;
