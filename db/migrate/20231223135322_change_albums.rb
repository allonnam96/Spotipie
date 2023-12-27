class ChangeAlbums < ActiveRecord::Migration[7.0]
  def change
    add_index :albums, :title
  end
end
