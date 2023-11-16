class Track < ApplicationRecord
    validates :title, presence: true

    belongs_to :album

    has_one :artist,
        through: :album,
        source: :artist

end