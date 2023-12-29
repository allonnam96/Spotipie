import csrfFetch from './csrf';
export const RECEIVE_ARTIST = 'songs/RECEIVE_ARTIST';
export const RECEIVE_SONG = 'songs/RECEIVE_SONG';
export const RECEIVE_SONGS = 'songs/RECEIVE_SONGS';
export const RECEIVE_ALBUM_FOR_PLAYBAR = 'songs/RECEIVE_ALBUM_FOR_PLAYBAR';
export const RECEIVE_ALBUMS = 'songs/RECEIVE_ALBUMS';
export const TOGGLE_PLAY = 'songs/TOGGLE_PLAY';
export const SET_VOLUME = 'songs/SET_VOLUME';
export const SET_SONG_POSITION = 'songs/SET_SONG_POSITION';
export const TOGGLE_SHUFFLE = 'songs/TOGGLE_SHUFFLE';
export const SET_QUEUE = 'songs/SET_QUEUE';
export const CHANGE_TRACK = 'songs/CHANGE_TRACK';


const fetchFromApi = async (endpoint) => {
  const response = await csrfFetch(endpoint);
  if (!response.ok) throw new Error('API request failed');
  return response.json();
};

export const fetchSongs = () => async (dispatch) => {
  try {
    const songs = await fetchFromApi('/api/songs');
    dispatch(receiveSongs(songs));
  } catch (error) {
    console.error('Fetch songs failed:', error);
  }
};

export const fetchSong = (songId) => async (dispatch) => {
  try {
    const song = await fetchFromApi(`/api/songs/${songId}`);
    dispatch(receiveSong(song));
  } catch (error) {
    console.error('Fetch song failed:', error);
  }
};

export const fetchAlbum = (albumId) => async (dispatch) => {
  try {
    const album = await fetchFromApi(`/api/albums/${albumId}`);
    dispatch(receiveAlbum(album));
  } catch (error) {
    console.error(`Fetch album failed:`, error);
  }
}

export const fetchAlbums = () => async (dispatch) => {
  try {
    const albums = await fetchFromApi(`/api/albums`);
    dispatch(receiveAlbums(albums));
  } catch (error) {
    console.error(`Fetch albums failed:`, error);
  }
}

export const fetchArtist = (artistId) => async (dispatch) => {
  try {
    const artist = await fetchFromApi(`/api/artists/${artistId}`);
    dispatch(receiveArtist(artist));
  } catch (error) {
    console.error(`Fetch artist failed:`, error);
  }
}

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  payload: artist
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  payload: song
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  payload: songs
});

export const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM_FOR_PLAYBAR,
  payload: album
})

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  payload: albums
})

export const togglePlay = (currentSong) => ({
  type: TOGGLE_PLAY,
  payload: currentSong
});

export const setVolume = (volume) => ({
  type: SET_VOLUME,
  payload: volume
});

export const setSongPosition = (position) => ({
  type: SET_SONG_POSITION,
  payload: position
});

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
});

export const setQueue = (queue) => ({
  type: SET_QUEUE,
  payload: queue
});

export const changeTrack = (direction) => ({
  type: CHANGE_TRACK,
  payload: direction // 'next' or 'previous'
});

const initialState = {
  currentArtist: {},
  currentAlbum: {},
  currentSong: {},
  isPlaying: false,
  volume: 1,
  songPosition: 0,
  shuffle: false,
  queue: [],
  currentTrackIndex: 0,
  trackHistory: []
};

const playbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ARTIST:
      return { ...state, currentArtist: action.payload };
    case RECEIVE_SONG:
      return { ...state, currentSong: action.payload };
    case RECEIVE_SONGS:
      return { ...state, songs: action.payload };
    case RECEIVE_ALBUM_FOR_PLAYBAR:
      return { ...state, currentAlbum: action.payload }
    case RECEIVE_ALBUMS:
      return { ...state, albums: action.payload }
    case TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying, 
        currentSong: action.payload };
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case SET_SONG_POSITION:
      return { ...state, songPosition: action.payload };
    case TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle };
    case SET_QUEUE:
      return { ...state, queue: action.payload };
    case CHANGE_TRACK:
      const indexChange = action.payload === 'next' ? 1 : -1;
      const newIndex = (state.currentTrackIndex + indexChange + state.queue.length) % state.queue.length;
      return { ...state, currentTrackIndex: newIndex };
    default:
      return state;
  }
};

export default playbarReducer;