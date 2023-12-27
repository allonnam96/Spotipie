class Playlist < ApplicationRecord
    validates :title, :creator_id, presence: true

    belongs_to :creator, 
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :playlist_songs,
        dependent: :destroy

    has_many :songs,
        through: :playlist_songs,
        source: :song

    def self.search(query)
        where("title ILIKE ?", "%#{query}%")
    end
end
