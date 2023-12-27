import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ onEnd, src, isPlaying }) => {
    const audioRef = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.src = src;
    }, [src]);

    return (
        <audio preload="metadata" ref={audioRef} onEnded={onEnd} />
    );
};

export default AudioPlayer;
