import React from 'react';
import { Link } from 'react-router-dom';

const AlbumInfo = ({ album }) => {
    if (!album) return null;

    return (
        <div className="img-playbar">
            <Link to={`/albums/${album.id}`}>
                <img src={album.imgUrl} alt="Album Cover" />
            </Link>
            <div className="footer-title">
                <Link to={`/albums/${album.id}`}>
                    <div className="left-title">{album.title}</div>
                    <div className="left-name">{album.artistName}</div>
                </Link>
            </div>
        </div>
    );
};

export default AlbumInfo;
