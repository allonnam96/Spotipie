class ChangeArtists < ActiveRecord::Migration[7.0]
  def change
    add_column :artists, :verified, :boolean, default: false, null: false
    add_column :artists, :about, :text
    add_column :artists, :about_img, :string
    add_column :artists, :rank, :bigint
    add_column :artists, :listeners, :bigint
  end
end
