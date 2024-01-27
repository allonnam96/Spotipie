import "./Search.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getAlbums, fetchAlbums } from "../../../store/album";
import { ReactComponent as SearchIcon } from "../../../_imgs/svg/SearchIcon.svg";
import AlbumIndexItem from "./AlbumIndexItem";

const Search = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);
  const [searchDelay, setSearchDelay] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAlbums, SetFilteredAlbums] = useState([]);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  useEffect(() => {
    clearTimeout(searchDelay);
    setSearchDelay(setTimeout(() => {
      const filtered = Object.values(albums).filter((album) =>
        album.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      SetFilteredAlbums(filtered);
    }, 400));
  }, [searchQuery, albums]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="albumIndexPage">
      <div className="album-index-items">
        <div className="search-album">
          <SearchIcon />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        {!filteredAlbums.length && searchQuery.length ? (
          <div className="no-results-div">
            <h2>No results found for "{searchQuery}"</h2>
            <p>
              Please make sure your words are spelled correctly, or use fewer or
              different keywords.
            </p>
          </div>
        ) : albums.length !== filteredAlbums.length && (
          <div className="search-results">
            {filteredAlbums.map((album) => (
              <Link
                to={`/albums/${album.id}`}
                key={album.id}
                className="albumLink"
              >
                <AlbumIndexItem album={album} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;