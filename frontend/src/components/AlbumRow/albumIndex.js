import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAlbums, fetchAlbums } from "../../store/album";
import { Link } from "react-router-dom"
// import { ReactComponent as NewJeansAlbum1 } from "../../_imgs/albumImg/NewJeans/NewJeansAlbum1.jpg";
import "./albums.css";


const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);


  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <div id="album-show-container">
      <div className="album-header">
      <div className="album-details">
        <div className="tracks-background">

          {
            (albums.concat(albums)).map(album => <Link to={`/albums/${album.id}`} className="album-background">
              <div className="album-img">
                <img src={album.imgUrl}>
                </img>
              </div>
              <div className="album-title">
                {album.title}
              </div>
            </Link>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumIndex;