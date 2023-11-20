import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAlbums, fetchAlbums } from "../../store/album";
import { Link } from "react-router-dom"
import { ReactComponent as NewJeansAlbum1 } from "../../_imgs/albumImg/NewJeans/NewJeansAlbum1.jpg";
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
          albums.map(album => <div>
            <Link to={`/albums/${album.id}`}>
              { album.title }
            </Link>
          </div>
          )
        }


      </div>
    </>
  );
}

export default AlbumIndex;