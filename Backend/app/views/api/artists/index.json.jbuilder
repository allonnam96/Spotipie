@artists.each do |artist|
    json.set! artist.id do
        json.partial! 'artist', artist: artist
        json.albumIds artist.albums.map { |album| album.id }
    end
end