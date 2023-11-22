import { useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, fetchAlbum } from "../../store/album";
import { getTracks } from "../../store/track";
import { getArtists } from "../../store/artist";
import { setCurrentTrack, togglePlaying } from "../../store/session";
import "./albumShow.css"

const AlbumShow = () => {
    const isPlaying = useSelector(state => state.session.isPlaying);
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(getAlbum(albumId));
    const tracks = useSelector(getTracks(albumId));
    const artistName = useSelector(state => getArtists(state, albumId));


    const totalDuration = tracks.reduce((total, track) => {
      const [minutes, seconds] = track.duration.split(':').map(Number);
      return total + minutes * 60 + seconds;
    }, 0);

    const formattedTotalDuration = `${Math.floor(totalDuration / 60)}:${`0${totalDuration % 60}`.slice(-2)}`;

    const trackClick = (track) => {
      if (!isPlaying){dispatch(togglePlaying())}
      let audio = document.querySelector("audio")
      audio.src = track.trackUrl
      audio.play()
    }
  
    useEffect(() => {
      dispatch(fetchAlbum(albumId));
    }, [dispatch, albumId]);
            

    return (
          
<div className="album-show-container">
  <div className="album-header">
    <img src={album?.imgUrl} alt="Album Cover" className="album-cover"/>
    <div className="album-details">
      <h2>{album?.title}</h2>
      <div className="album-meta">
        <span>{artistName}</span> 
        •
        <span>{album?.year}</span> •
        <span>{tracks.length} songs, {formattedTotalDuration}</span>
      </div>
    </div>
  </div>
  <div className="track-list-container">
    <div className="track-list">
      {tracks.map((track, index) => (
        <div className="track" key={index} onClick={() => trackClick(track)}>
          <span className="track-number">{index + 1}</span>
          <span className="track-title">{track.title}</span>
          <span className="track-duration">{track.duration}</span>
        </div>
      ))}
    </div>
  </div>
</div>

    );
  }
  
  export default AlbumShow;