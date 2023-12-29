import "./albumShow.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, fetchAlbum } from "../../../store/album";
import { getSongs } from "../../../store/song";
import { ReactComponent as SmallPlay } from "../../../_imgs/svg/smallPlay.svg";
import { ReactComponent as Duration } from "../../../_imgs/svg/Duration.svg";
import { receiveAlbum, togglePlay } from "../../../store/playbar";

const AlbumShow = () => {
    const isPlaying = useSelector(state => state.session.isPlaying);
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(getAlbum(albumId));
    const songs = useSelector(getSongs(albumId));
    const [selected, setSelected] = useState(-1);
    const [hovered, setHovered] = useState(-1);

    const totalDuration = songs.reduce((total, song) => {
      const [minutes, seconds] = song.duration.split(':').map(Number);
      return total + minutes * 60 + seconds;
    }, 0);

    const handleHover = (index) => {
      setHovered(index);
    };

    const handleSelect = (song, index, album) => {
      if(selected == index) {
        play(song, album);
      } else {
        setSelected(index);
      }
    };

    const play = (song, album) => {
      if (!isPlaying){
        dispatch(togglePlay(song))
        dispatch(receiveAlbum(album))
      }
      let audio = document.querySelector("audio")
      audio.src = song.songUrl
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
        
        <span>• {songs.length} songs, {`${Math.floor(totalDuration / 60)} min ${`0${totalDuration % 60}`.slice(-2)} sec`}</span>
      </div>
    </div>
  </div>
  <div className="song-list-container">
    <div className="song-list">
      
    <span className="song-number-number"># </span>
    <span className="song-title-title">Title</span>
    <span className="song-duration-duration"> <Duration/> </span>
    </div>
    <div className="song-list-line">
    </div>

      {songs.concat(songs).map((song, index, album) => (
        <div className={"song" + (index === selected ? " selected" : "")}
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(-1)}
          onClick={() => (handleSelect(song, index, album))}>
          {index === hovered || index === selected ?
            <SmallPlay /> :
            <span className="song-number">{index + 1}</span>}

          <span className="song-title">{song.title}
            <span className="song-artistName">{album?.artistName}</span>
          </span>

          <span className="song-duration">{song.duration}</span>
        </div>
      ))}

  </div>
</div>

    );
  }
  
  export default AlbumShow;