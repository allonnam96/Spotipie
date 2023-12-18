import { ReactComponent as HomeIcon } from "../../_imgs/svg/HomeIcon.svg";
import { ReactComponent as HomeFillIcon } from "../../_imgs/svg/HomeFillIcon.svg";
import { ReactComponent as SearchIcon } from "../../_imgs/svg/SearchIcon.svg";
import { ReactComponent as SearchFillIcon } from "../../_imgs/svg/SearchFillIcon.svg";
import { ReactComponent as LibraryIcon } from "../../_imgs/svg/LibraryIcon.svg";
import { ReactComponent as PlayBtnIcon } from "../../_imgs/svg/Play.svg";
import { ReactComponent as PauseBtnIcon } from "../../_imgs/svg/Pause.svg";
import { ReactComponent as BackwardBtnIcon } from '../../_imgs/svg/Backward.svg';
import { ReactComponent as ForwardBtnIcon } from '../../_imgs/svg/Forward.svg';
import { ReactComponent as SpeakerBtnIcon } from "../../_imgs/svg/Speaker.svg";
import { ReactComponent as SpeakerMutedIcon } from "../../_imgs/svg/SpeakerMuted.svg";
import { ReactComponent as ShuffleBtn } from "../../_imgs/svg/ShuffleBtn.svg";
import { ReactComponent as RepeatBtn } from "../../_imgs/svg/RepeatBtn.svg"
import { ReactComponent as SmallPlayIcon } from "../../_imgs/svg/smallPlay.svg";
import { ReactComponent as DurationIcon } from "../../_imgs/svg/Duration.svg";
import { ReactComponent as LikeBtn } from "../../_imgs/svg/LikeBtn.svg";

const Icon = ({ IconType, onClick }) => {
    const icons = {
        HomeIcon,
        HomeFillIcon,
        SearchIcon,
        SearchFillIcon,
        LibraryIcon,
        PlayBtnIcon,
        PauseBtnIcon,
        BackwardBtnIcon,
        ForwardBtnIcon,
        SpeakerBtnIcon,
        SpeakerMutedIcon,
        ShuffleBtn,
        RepeatBtn,
        SmallPlayIcon,
        DurationIcon,
        LikeBtn
    };

    const IconComponent = icons[IconType];
    return <IconComponent onClick={onClick} />;
}

export default Icon; 