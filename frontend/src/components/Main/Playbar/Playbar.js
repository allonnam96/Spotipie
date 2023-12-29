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
import { getSongs } from "../../../store/song";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { togglePlay } from "../../../store/playbar";
import { receiveSong } from "../../../store/song";

const Playbar = () => {

    const currentAlbum = useSelector(state => state.playbar.currentAlbum)
    const currentSong = useSelector(state => state.playbar.currentSong)
    const isPlaying = useSelector(state => state.session.isPlaying);
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
        console.log("Is Playing:", isPlaying);
        if (!isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
        dispatch(togglePlay(currentSong));
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
        setVolume(newVolume);
        setIsMuted(newVolume === '0');
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

    const playPreviousSong = () => {
        const currentSongIndex = currentAlbum.findIndex(song => song.id === currentSong.id);

        const prevSongIndex = (currentSongIndex - 1 + currentAlbum.length) % currentAlbum.length; // Loop to the end
        const prevSong = currentAlbum[prevSongIndex];
        dispatch(receiveSong(prevSong));

        if (!isPlaying) {
            dispatch(togglePlay(prevSong));
        }
    };

    const playNextSong = () => {
        const currentSongIndex = currentAlbum.findIndex(song => song.id === currentSong.id);
        const nextSongIndex = (currentSongIndex + 1) % currentAlbum.length; // Loop back to the start
        const nextSong = currentAlbum[nextSongIndex];
        dispatch(receiveSong(nextSong));

        if (!isPlaying) {
            dispatch(togglePlay(nextSong));
        }
    };

    return (
        <div className="footer">
            <div className="img-playbar">
                <Link to={`/albums/${albumId}`}>
                    <img src={album?.imgUrl} alt="Album Cover" />
                </Link>
                <div className="footer-title">
                    <Link to={`/albums/${albumId}`}>
                        <div className="left-title">{album?.title}</div>
                        <div className="left-name">{album?.artistName}</div>
                    </Link>
                </div>
            </div>
            <div className="playbar">
                <div className="controls">
                    <audio preload="metadata" ref={audioPlayer} onTimeUpdate={whilePlaying} />
                    <div className="alignment-buttons">
                        <div className="backwardBtn" onClick={playPreviousSong}>
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
                        <div className="forwardBtn" onClick={playNextSong}>
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
