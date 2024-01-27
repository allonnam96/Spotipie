const AlbumIndexItem = ({ album }) => {
    return (
        <div className="albumIndexItem">
            <img src={album.albumCover} alt="" />
            <h2 className="artistTitle">{album.title}</h2>
            <p className="artistName">{album.artistName}</p>
        </div>
    );
};

export default AlbumIndexItem;