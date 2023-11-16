@albums.each do |album|
    json.set! album.id do
        json.partial! 'album', album: album
        json.artistName album.artist.name
        json.trackIds album.tracks.map { |track| track.id }
    end
end