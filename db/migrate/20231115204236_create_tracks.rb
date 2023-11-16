class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :title, null:false
      t.references :album, foreign_key:true, null:false
      t.string :duration, null:false

      t.timestamps
    end
  end
end
