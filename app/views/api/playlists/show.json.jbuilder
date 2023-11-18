json.playlist do
    json.id @playlist.id
    json.title @playlist.title
    json.uploaderId @playlist.uploader_id
    json.uploaderrName @creator.username
    json.playlistTrackIds @playlist_track_ids
    json.songCount @playlist_track_ids.size
  end
  
    json.tracks do
      @playlist.tracks.each do |track|
        json.set! track.id do
          json.id track.id
          json.title track.title
          json.album track.album.title
          json.artist track.artist.name
          json.duration track.duration
          json.albumCover track.album.img_url
        #   json.playlistTrackId track.playlist_tracks.all.select {|playlist_track| @playlist.id == playlist_track.playlist_id}.first ? song.playlist_tracks.all.select {|playlist_track| @playlist.id === playlist_track.playlist_id}.first.id : nil
        end
      end
    end