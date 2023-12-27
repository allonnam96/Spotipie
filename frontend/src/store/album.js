export const RECEIVE_ALBUMS = "albums/RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "album/RECEIVE_ALBUM";
// export const REMOVE_ALBUM = "albums/REMOVE_ALBUM";

const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = (album, songs) => ({
    type: RECEIVE_ALBUM,
    album,
    songs
});

// const removeAlbum = (albumId) => ({
//     type: REMOVE_ALBUM,
//     albumId
// });

export const getAlbum = albumId => state => {
    return state?.albums ? state.albums[albumId] : null;
}

export const getAlbums = state => {
    return state?.albums ? Object.values(state.albums) : [];
}

export const fetchAlbums = () => async (dispatch) => {
    const response = await fetch('/api/albums');

    if (response.ok) {
        const albums = await response.json();
        dispatch(receiveAlbums(albums));
    }
};

export const fetchAlbum = albumId => async (dispatch) => {

    const response = await fetch(`/api/albums/${albumId}`);

    if (response.ok) {
        const album = await response.json();
        dispatch(receiveAlbum(album.album, album.songs));
    }
};

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_ALBUMS:
        return { ...action.albums };
      case RECEIVE_ALBUM:
        return { ...state, [action.album.id]: action.album };
    //   case REMOVE_ALBUM:
    //     const newState = { ...state };
    //     delete newState[action.albumId];
    //     return newState;
      default:
        return state;
    }
  }
  
  export default albumsReducer;