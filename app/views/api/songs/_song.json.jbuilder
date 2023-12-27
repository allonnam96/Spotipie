if song
    json.song do
        json.id song.id
        json.title song.title
        json.album song.album.title
        json.artist song.artist.name
        json.albumImg song.album.img_url
        json.songUrl url_for(song.song_file)
        json.explicit song.explicit
        json.artistId song.artist.id
        json.albumId song.album.id
    end
end