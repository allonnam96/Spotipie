import React from 'react';
import { ReactComponent as Backward } from '../../../../_imgs/svg/Backward.svg';
import { ReactComponent as Forward } from '../../../../_imgs/svg/Forward.svg';
import { ReactComponent as Pause } from '../../../../_imgs/svg/Pause.svg';
import { ReactComponent as Play } from '../../../../_imgs/svg/Play.svg';

const PlayControls = ({ isPlaying, onPlayPauseClick, onNextClick, onPrevClick }) => {
    return (
        <div className="alignment-buttons">
            <div className="backwardBtn" onClick={onPrevClick}>
                <Backward />
            </div>
            <div className="playPause" onClick={onPlayPauseClick}>
                {isPlaying ? <Pause /> : <Play />}
            </div>
            <div className="forwardBtn" onClick={onNextClick}>
                <Forward />
            </div>
        </div>
    );
};

export default PlayControls;
