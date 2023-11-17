export const RECEIVE_ALBUM = "album/RECEIVE_ALBUM";



export const getTracks = albumId => state => {
    return state?.tracks ? Object.values(state.tracks).filter(tracks => tracks.albumId == albumId) : [];
}

const tracksReducer = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_ALBUM:
        return { ...state,...action.tracks };
    //   case REMOVE_ALBUM:
    //     const newState = { ...state };
    //     delete newState[action.albumId];
    //     return newState;
      default:
        return state;
    }
  }

  export default tracksReducer;