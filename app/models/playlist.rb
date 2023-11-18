class Playlist < ApplicationRecord
    validates :title, presence: true

    belongs_to :uploader, 
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :playlist_tracks,
        dependent: :destroy

    has_many :tracks,
        through: :playlist_tracks,
        source: :track
end
