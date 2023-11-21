class ChangeTrack < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :track_url, :string
  end
end
