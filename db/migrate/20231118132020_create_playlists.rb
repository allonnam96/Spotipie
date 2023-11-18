class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :title, null:false
      t.integer :uploader_id, null:false
      t.timestamps
    end
  end
end
