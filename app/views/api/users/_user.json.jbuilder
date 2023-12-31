json.extract! user, :id, :username
json.playlistIds user.playlists.map { |playlist| playlist.id }
json.likeSongIds user.like_songs.map { |song| song.song_id }
json.likeSongs user.like_songs

if currentSong
    json.currentSong do
        json.song do
            json.id currentSong.id
            json.title currentSong.title
            json.songUrl url_for(currentSong.song_file)
            json.album currentSong.album.title
            json.artist currentSong.artist.name
            json.imgUrl currentSong.album.image_url
            json.explicit currentSong.explicit
        end
    end
end

json.playlists do
    user.playlists.each do |playlist|
        json.set! playlist.id do
            json.id playlist.id
            json.title playlist.title
            json.creator_id playlist.creator_id
            json.creatorName playlist.creator.username
            json.playlistSongIds playlist.songs.map { |song| song.id }
            json.imageUrl playlist.image_url
            json.firstImage playlist.songs.first ? playlist.songs.first.album.image_url : playlist.songs.first
        end
    end
end