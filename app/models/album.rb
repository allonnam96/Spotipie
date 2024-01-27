# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :bigint           not null
#  year       :integer          not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre      :string
#  publisher  :string
#
class Album < ApplicationRecord
    validates :title, :artist_id, :year, :img_url, presence: true
    validates :title, uniqueness: { scope: :artist_id }
    validates :year, numericality: { minimum: 1800, maximum: 2100}
 
    belongs_to :artist
    has_many :songs, dependent: :destroy

    def self.search(query)
        where("title ILIKE ? OR genre ILIKE ?", "%#{query}%", "%#{query}%")
    end
end
