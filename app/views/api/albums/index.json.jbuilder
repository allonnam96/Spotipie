@albums.each do |album|
    json.set! album.id do
        json.id album.id
        json.title album.title
        json.year album.year
        json.artist_id album.artist_id
        json.imgUrl album.img_url
        json.genre album.genre
        json.publisher album.publisher
        json.artistName album.artist.name
        json.songIds album.songs.map { |song| song.id }
        # json.photoUrl album.photo.attached? ? album.photo.url : nil
    end
end