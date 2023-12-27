export const RECEIVE_ALBUM = "album/RECEIVE_ALBUM";



export const getSongs = albumId => state => {
    return state?.songs ? Object.values(state.songs).filter(songs => songs.albumId == albumId) : [];
}

const songsReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_ALBUM:
        return { ...state,...action.songs };
      default:
        return state;
    }
  }

  export default songsReducer;