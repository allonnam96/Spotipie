class ChangeUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current_song_id, :integer
  end
end
