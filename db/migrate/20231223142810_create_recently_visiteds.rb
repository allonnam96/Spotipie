class CreateRecentlyVisiteds < ActiveRecord::Migration[7.0]
  def change
    create_table :recently_visiteds do |t|
      t.integer :user_id
      t.string :table
      t.string :title
      t.integer :table_id
      t.string :image_url
      t.timestamps
    end
  end
end
