# == Schema Information
#
# Table name: artists
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  thumbnail_img :string
#
class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :albums, 
        dependent: :destroy

    has_many :tracks, 
        through: :albums,
        source: :tracks
end
