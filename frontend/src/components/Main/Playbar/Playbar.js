import "./Playbar.css";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Backward } from "../../../_imgs/svg/Backward.svg";
import { ReactComponent as Forward } from "../../../_imgs/svg/Forward.svg";
import { ReactComponent as Speaker } from "../../../_imgs/svg/Speaker.svg";
import { ReactComponent as Pause } from "../../../_imgs/svg/Pause.svg";
import { ReactComponent as Play } from "../../../_imgs/svg/Play.svg";
import { ReactComponent as SpeakerMuted } from "../../../_imgs/svg/SpeakerMuted.svg"
import { getAlbum } from "../../../store/album";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setPlaying } from "../../../store/playbar";
import { receiveSong } from "../../../store/song";

const Playbar = () => {
    const currentAlbum = useSelector(state => state.playbar.currentAlbum)
    const currentSong = useSelector(state => state.playbar.currentSong)
    const isPlaying = useSelector(state => state.playbar.isPlaying);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { albumId } = useParams();
    const album = useSelector(getAlbum(albumId));
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const audioPlayer = useRef();
    const progressBar = useRef();
    const volumeControl = useRef();
    const dispatch = useDispatch();
    const MAX_VOLUME_WIDTH = "7em";

    useEffect(() => {
        progressBar.current.style.background = `linear-gradient(to right, #b3b3b3 0%, #404040 0%)`;
        volumeControl.current.style.setProperty('--volume-width', MAX_VOLUME_WIDTH);
    }, []);

    useEffect(() => {
        const handleKeydown = e => {
            if (e.keyCode == 32) {
                e.preventDefault();
                if (Object.keys(currentSong).length) {
                    changePlayPause();
                }
            }
        }
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        }
    }, [currentSong, isPlaying]);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);

        const player = audioPlayer.current;
        if (player) {
            player.addEventListener('ended', playNextSong);
        }
        return () => {
            if (player) {
                player.removeEventListener('ended', playNextSong);
            }
        };
    }, [audioPlayer?.current?.duration]);

    useEffect(() => {
        let audio = document.querySelector("audio")
        audio.src = currentSong.songUrl
        audio.play()
    }, [currentSong])

    const changePlayPause = () => {
        if (!isPlaying) {
            audioPlayer.current.play();
            dispatch(setPlaying(true));
        } else {
            audioPlayer.current.pause();
            dispatch(setPlaying(false));
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            audioPlayer.current.volume = volume;
            setIsMuted(false);
        } else {
            setVolume(audioPlayer.current.volume);
            audioPlayer.current.volume = 0;
            setIsMuted(true);
        }
    };

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        audioPlayer.current.volume = newVolume;
    
        const volumePercent = `calc(${newVolume} * ${MAX_VOLUME_WIDTH})`;
        volumeControl.current.style.setProperty('--volume-width', `${volumePercent}`);
        
        setVolume(newVolume);
        setIsMuted(newVolume === '0');
    };

    const whilePlaying = () => {
        const currentTime = audioPlayer.current.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.current.value = currentTime;
        progressBar.current.style.setProperty('--progress-width', `${progressPercent}%`);
        setCurrentTime(currentTime);
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
        const progress = (progressBar.current.value / duration) * 100;
        progressBar.current.style.background = `linear-gradient(to right, #b3b3b3 ${progress}%, #404040 ${progress}%)`;
        setCurrentTime(progressBar.current.value);
    };

    const playPreviousSong = () => {
        const currentSongIndex = currentAlbum.findIndex(song => song.id === currentSong.id);
        const prevSongIndex = (currentSongIndex - 1 + currentAlbum.length) % currentAlbum.length;
        const prevSong = currentAlbum[prevSongIndex];
        dispatch(receiveSong(prevSong));
        dispatch(setPlaying(true));
    };

    const playNextSong = () => {
        const currentSongIndex = currentAlbum.findIndex(song => song.id === currentSong.id);
        const nextSongIndex = (currentSongIndex + 1) % currentAlbum.length;
        const nextSong = currentAlbum[nextSongIndex];
        dispatch(receiveSong(nextSong));
        dispatch(setPlaying(true));
    };

    return (
        <div className="footer">
            <div className="img-playbar">
                {Object.keys(currentSong).length ? <Link to={`/albums/${albumId}`}>
                    <img src={currentSong.imgUrl} alt="Album Cover" />
                </Link> : <></>}
            </div>
            <div className="footer-title">
                <Link to={`/albums/${albumId}`}>
                    <div className="left-title">{currentSong?.title}</div>
                    <div className="left-name">{currentSong?.artist}</div>
                </Link>
            </div>
            <div className={`playbar ${Object.keys(currentSong).length ? "active" : "inactive"}`}>
                <div className="controls">
                    <audio preload="metadata" ref={audioPlayer} onTimeUpdate={whilePlaying} />
                    <div className="alignment-buttons">
                        <div className="backwardBtn" onClick={playPreviousSong}>
                            <Backward />
                        </div>
                        <div className="playPause" onClick={() => changePlayPause(currentSong)}>
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
                        <div className="forwardBtn" onClick={playNextSong}>
                            <Forward />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <span className="currentTime">
                        {duration && !isNaN(duration) ? calculateTime(currentTime) : "0:00"}
                    </span>
                    <input
                        type="range"
                        className="progressBar"
                        ref={progressBar}
                        defaultValue="0"
                        max={duration}
                        onChange={changeProgress}
                    />
                    <span className="duration">
                        {duration && !isNaN(duration) ? calculateTime(duration) : "0:00"}
                    </span>
                </div>
            </div>

            <div className="volume-control">
                <div className="speakerBtn" onClick={toggleMute}>
                    {isMuted ? <SpeakerMuted /> : <Speaker />}
                </div>
                <input
                    type="range"
                    className="volume-slider"
                    ref={volumeControl}
                    value={isMuted ? '0' : volume}
                    min="0"
                    max="1"
                    step="0.01"
                    onChange={changeVolume}
                />
            </div>
        </div>
    );
};

export default Playbar;
