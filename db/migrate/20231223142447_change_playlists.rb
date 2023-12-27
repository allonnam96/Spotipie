class ChangePlaylists < ActiveRecord::Migration[7.0]
  def change
    rename_column :playlists, :uploader_id, :creator_id
    add_column :playlists, :image_url, :string
  end
end
