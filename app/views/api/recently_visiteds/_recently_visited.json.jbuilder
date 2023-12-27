recently_visited.each do |visit|
    json.set! visit.id do
        json.id visit.id
        json.table visit.table
        json.title visit.title
        json.tableId visit.table_id
        json.userId visit.user_id
        json.playlistImage visit.image_url
        json.albumImage visit.album.image_url
    end
end