import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, fetchAlbum } from "../../store/album";
import { getTracks } from "../../store/track";
import { getArtists } from "../../store/artist";
import { ReactComponent as SmallPlay } from "../../_imgs/svg/smallPlay.svg";
import { ReactComponent as Duration } from "../../_imgs/svg/Duration.svg";

import { setCurrentTrack, togglePlaying } from "../../store/session";
import "./albumShow.css"

const AlbumShow = () => {
    const isPlaying = useSelector(state => state.session.isPlaying);
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(getAlbum(albumId));
    const tracks = useSelector(getTracks(albumId));
    const artistName = useSelector(state => getArtists(state, albumId));

    const [selected, setSelected] = useState(-1);
    const [hovered, setHovered] = useState(-1);

    const totalDuration = tracks.reduce((total, track) => {
      const [minutes, seconds] = track.duration.split(':').map(Number);
      return total + minutes * 60 + seconds;
    }, 0);

    const handleHover = (index) => {
      setHovered(index);
    };

    const handleSelect = (track, index) => {
      if(selected === index) {
        play(track);
      } else {
        setSelected(index);
      }
    };


    const formattedTotalDuration = `${Math.floor(totalDuration / 60)}:${`0${totalDuration % 60}`.slice(-2)}`;

    const play = (track) => {
      if (!isPlaying){dispatch(togglePlaying())}
      let audio = document.querySelector("audio")
      audio.src = track.trackUrl
      audio.play()
    }
  
    useEffect(() => {
      dispatch(fetchAlbum(albumId));
    }, [dispatch, albumId]);
            

    return (
          
<div id="album-show-container">
  <div className="album-header">
    <img src={album?.imgUrl} alt="Album Cover" className="album-cover"/>
    <div className="album-details">
      <h2>{album?.title}</h2>
      <div className="album-meta">
        <span className="artist-meta-name"> {album?.artistName}</span>
        
        <span>• {album?.year}</span> 
        
        <span>• {tracks.length} songs, {`${Math.floor(totalDuration / 60)} min ${`0${totalDuration % 60}`.slice(-2)} sec`}</span>
      </div>
    </div>
  </div>
  <div className="track-list-container">
    <div className="track-list">
      
    <span className="track-number-number"># </span>
    <span className="track-title-title">Title</span>
    <span className="track-duration-duration"> <Duration/> </span>
    </div>
    <div className="track-list-line">
    </div>

      {tracks.concat(tracks).map((track, index) => (
        <div className={"track" + (index === selected ? " selected" : "")}
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(-1)}
          onClick={() => (handleSelect(track, index))}>
          {index === hovered || index === selected ?
            <SmallPlay /> :
            <span className="track-number">{index + 1}</span>}

          <span className="track-title">{track.title}
            <span className="track-artistName">{album?.artistName}</span>
          </span>

          <span className="track-duration">{track.duration}</span>
        </div>
      ))}

  </div>
</div>

    );
  }
  
  export default AlbumShow;