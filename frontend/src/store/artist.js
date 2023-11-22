export const RECEIVE_ARTIST = "artist/RECEIVE_ARTIST"

export const getArtists = albumId => state => {
    return state?.artists ? Object.values(state.artists).filter(artists => artists.albumId == albumId) : [];
}

const artistsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ARTIST:
            return {...state, ...action.artists};
            
        default:
            return state;
    }
}

export default artistsReducer;