@playlists.each do |playlist|
    json.set! playlist.id do
      json.id playlist.id
      json.title playlist.title
      json.uploader_id playlist.uploader_id
      json.uploaderName playlist.uploader.username
      json.playlistTrackIds playlist.tracks.map { |track| track.id }
    end
  end