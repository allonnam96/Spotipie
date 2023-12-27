import React, { useState, useEffect } from 'react';
import { ReactComponent as Speaker } from '../../../../_imgs/svg/Speaker.svg';
import { ReactComponent as SpeakerMuted } from '../../../../_imgs/svg/SpeakerMuted.svg';

const VolumeControl = ({ initialVolume, onVolumeChange }) => {
    const [volume, setVolume] = useState(initialVolume);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        onVolumeChange(isMuted ? 0 : volume);
    }, [volume, isMuted]);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        setIsMuted(e.target.value === '0');
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="volume-control">
            <div className="speakerBtn" onClick={toggleMute}>
                {isMuted ? <SpeakerMuted /> : <Speaker />}
            </div>
            <input
                type="range"
                className="volume-slider"
                value={isMuted ? '0' : volume}
                min="0"
                max="1"
                step="0.01"
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeControl;
