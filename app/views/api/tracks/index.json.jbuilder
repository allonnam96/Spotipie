@tracks.each do |track|
    json.set! track.id do
      json.id track.id
      json.title track.title
      json.album track.album.title
      json.albumId track.album.id
      json.artist track.artist.name
      json.artistId track.artist.id
      json.duration track.duration
      json.albumCover track.album.img_url
    end
  end