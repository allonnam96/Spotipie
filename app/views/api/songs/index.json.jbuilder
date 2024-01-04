@search_results.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.songUrl song.song_url
      json.album song.album.title
      json.albumId song.album.id
      json.artist song.artist.name
      json.artistId song.artist.id
      json.duration song.duration
      json.imgUrl song.album.img_url
      json.songUrl url_for(song.song_file)
      json.explicit song.explicit
    end
  end