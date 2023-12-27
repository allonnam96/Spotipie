class AddCascadeToDeleteAlbums < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :songs, :albums
    add_foreign_key :songs, :albums, on_delete: :cascade
  end
end
