class ChangeAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :genre, :string
    add_column :albums, :publisher, :string
  end
end
