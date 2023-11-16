json.partial! 'artist', artist: @artist

json.tracks do
    @album.tracks.each do |track|
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.album track.album.title
            json.artist track.artist.name
            json.duration track.duration
            json.trackCover track.album.img_url
        end
    end
end

json.albums do
@albums.each do |album|
    json.set! album.id do
        json.partial! 'album', album: album
        json.artistName album.artist.name
        json.trackCount album.tracks.size
        json.trackIds album.tracks.map { |track| track.id }
        end
    end
end