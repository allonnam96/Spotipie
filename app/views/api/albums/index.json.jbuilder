@albums.each do |album|
    json.set! album.id do
        # json.partial! 'album', album: album
        json.id album.id
        json.title album.title
        json.year album.year
        json.img_url album.img_url
        json.artist_id album.artist_id
        json.genre album.genre
        json.publisher album.publisher
        json.artistName album.artist.name
        # json.trackIds album.tracks.map { |track| track.id }
        json.photoUrl album.photo.attached? ? album.photo.url : nil
    end
end