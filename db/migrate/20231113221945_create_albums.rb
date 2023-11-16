class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null:false
      t.references :artist, null: false, foreign_key: true, index: false
      t.integer :year, null:false
      t.string :img_url, null:false

      t.timestamps
    end
    add_index :albums, %i(artist_id title), unique: true
  end
end
