import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums, fetchAlbums } from "../../store/album";
import { Link } from "react-router-dom"
import "./albums.css";


const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    dispatch(fetchAlbums());

    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, [dispatch]);

  return (
    <div id="album-index-container">
      <div className="album-header">
      <div className="album-details">
        <div id="tracks-background">
        <h1>{greeting}</h1>
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