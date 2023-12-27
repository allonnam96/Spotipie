json.partial! '/api/users/user', user: @user, currentSong: @current_song

playlists = @user.playlists

json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
  json.playlists playlists
end