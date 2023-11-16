@tracks.each do |track|
    json.set! track.id do
        json.partial! 'track', track: track
        json.trackIds track.tracks.map { |track| track.id }
        
        json.album track.album.title
        json.albumId track.album.id
        json.artist track.artist.name
        json.artistId track.artist.id
        json.albumimg track.album.img_url
    end
end