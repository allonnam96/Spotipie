export const RECEIVE_ALBUM = "album/RECEIVE_ALBUM";

export const RECEIVE_SONGS = "songs/RECEIVE_SONGS";
export const RECEIVE_SONG = "songs/RECEIVE_SONG";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  payload: songs
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  payload: song,
});

export const getSongs = albumId => state => {
  return state?.songs ? Object.values(state.songs).filter(songs => songs.albumId == albumId) : [];
}

export const getSong = (songId) => (state) => (state.songs ? state.songs[songId] : [])

export const fetchSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  const songs = await res.json();
  dispatch(receiveSongs(songs));
}

export const fetchSong = () => (songId) => async (dispatch) => {
  const res = await fetch(`/api/songs/${songId}`);
  const song = await res.json();
  dispatch(receiveSong(song));
};

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return { ...action.songs };
    case RECEIVE_SONG:
      return { ...state, [action.payload.id]: action.payload }
    case RECEIVE_ALBUM:
      return { ...state, ...action.songs };
    default:
      return state;
  }
}

export default songsReducer;