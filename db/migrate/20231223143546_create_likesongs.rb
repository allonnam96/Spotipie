class CreateLikesongs < ActiveRecord::Migration[7.0]
  def change
    create_table :likesongs do |t|
      t.integer :user_id
      t.integer :song_id
      t.timestamps
    end
  end
end
