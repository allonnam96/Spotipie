json.playlist do
    json.id @playlist.id
    json.title @playlist.title
    json.creatorId @playlist.creator_id
    json.creatorName @creator.username
    json.playlistSongIds @playlist_song_ids
    json.songCount @playlist_song_ids.size
    json.imageUrl @playlist.image_url
    json.firstImage @playlist.songs.empty? ? nil : @playlist.songs.first.album.img_url
  end
  
    json.songs do
      @playlist.songs.each do |song|
        json.set! song.id do
          json.id song.id
          json.title song.title
          json.album song.album.title
          json.artist song.artist.name
          json.duration song.duration
          json.explicit song.explicit
          json.albumCover song.album.img_url
          json.playlistSongId song.playlist_songs.all.select { |playlist_song| @playlist.id == playlist_song.playlist_id}.first ? song.playlist_songs.all.select {|playlist_song| @playlist.id == playlist_song.playlist_id}.first.id : nil
        end
      end
    end