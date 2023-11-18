import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAlbums, fetchAlbums } from "../../store/album";
import { Link } from "react-router-dom"
import "./albums.css";


const AlbumIndex = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return (
    <>
      <div className="tracks-background">

        {
          albums.map(album =><div>
            <Link to={`/albums/${album.id}`}>
              {album.title}
            </Link>
            </div> 

            // <Link to={`/artists/${artist.id}`}>
            //   {album.artist.name}
            // </Link>
            //   album={album}
            //   key={album.id}
          )
        }
{/* {
          albums.map(album => <div>
            { album.year }
            { album.genre }
            { album.publisher }
          </div>)
        } */}
      </div>
    </>
  );
}

export default AlbumIndex;