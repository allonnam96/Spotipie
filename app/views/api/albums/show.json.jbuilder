# json.partial! 'album', album: @album

json.album do
    json.id @album.id
    json.title @album.title
    json.year @album.year
    json.img_url @album.img_url
    json.artist_id @album.artist_id
    json.genre @album.genre
    json.publisher @album.publisher
    json.artistName @album.artist.name
    json.artistName @album.artist.name
    json.trackCount @album.tracks.size 
    json.photoUrl @album.photo.attached? ? @album.photo.url : nil
end

json.tracks do
    @album.tracks.each do |track|
        json.set! track.id do
            json.id track.id
            json.title track.title
            json.trackUrl track.track_url
            json.album track.album.title
            json.albumId track.album.id
            json.artist track.artist.name
            json.duration track.duration
        end
    end
end