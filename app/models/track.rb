# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :bigint           not null
#  duration   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
    validates :title, presence: true

    belongs_to :album

    has_one :artist,
        through: :album,
        source: :artist

end
