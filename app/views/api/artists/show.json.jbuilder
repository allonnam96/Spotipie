# json.artist do
#     json.id @artist.id
#     json.name @artist.name
#     json.albumIds @album_ids
#     json.thumbImageUrl @artist.thumbnail_img
# end

# json.songs do
#     @songs.each do |song|
#         json.set! song.id do
#             json.id song.id
#             json.title song.title
#             json.album song.album.title
#             json.artist song.artist.name
#             json.duration song.duration
#             json.explicit song.explicit
#             json.albumCover song.album.img_url
#         end
#     end
# end

# json.albums do
# @artist.albums.each do |album|
#     json.set! album.id do
#         json.id album.id
#         json.title album.title
#         json.year album.year
#         json.artistName album.artist.name
#         json.artistId album.artist_id
#         json.songCount album.songs.size
#         json.songIds album.songs.map { |song| song.id }
#         json.imageUrl album.img_url
#         json.songCounter album.songs.size
#         end
#     end
# end

json.extract! @artist, :id, :name, :verified, :about, :about_img, :rank, :listeners