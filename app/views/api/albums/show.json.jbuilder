# json.partial! 'album', album: @album

json.album do
    json.id @album.id
    json.title @album.title
    json.year @album.year
    json.imgUrl @album.img_url
    json.artistId @album.artist_id
    json.songIds @song_ids
    json.genre @album.genre
    json.publisher @album.publisher
    json.artistName @album.artist.name
    json.songCount @album.songs.size 
    json.publisher @album.publisher
    # json.photoUrl @album.photo.attached? ? @album.photo.url : nil
end

json.songs do
    @album.songs.each do |song|
        json.set! song.id do
            json.id song.id
            json.title song.title
            json.songUrl song.song_url
            json.imgUrl @album.img_url
            json.album song.album.title
            json.albumId song.album.id
            json.artist song.artist.name
            json.duration song.duration
            json.explicit song.explicit
        end
    end
end