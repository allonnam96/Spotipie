json.partial! 'album', album: @album

json.album do
    json.artistName @album.artist.name
    json.trackCount @album.tracks.size 
end

json.tracks do
    @album.tracks.each do |track|
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.album track.album.title
            json.artist track.artist.name
            json.duration track.duration
        end
    end
end