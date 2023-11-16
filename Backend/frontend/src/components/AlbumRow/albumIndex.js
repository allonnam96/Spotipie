import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAlbums, fetchAlbums } from "../../store/album";


const AlbumIndex = () => {
    const dispatch = useDispatch();
    const albums = useSelector(getAlbums);
    
    useEffect(() => {
      dispatch(fetchAlbums());
    }, [dispatch]);
    
    return (
      <>
        <ul>
          {
            albums.map(album => <AlbumIndex
              album={album}
              key={album.id}
            />)
          }
        </ul>
      </>
    );
  }
  
  export default AlbumIndex;