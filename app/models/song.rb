# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :bigint           not null
#  duration   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
    validates :title, :artist_id, :album_id, :duration, presence: true
    validates :explicit, inclusion: { in: [true, false] }

    has_one_attached :song_file

    belongs_to :album
    belongs_to :artist

    has_many :playlist_songs
    has_many :playlists, 
        through: :playlist_songs,
        source: :playlist
    has_many :like_songs,
        foreign_key: :song_id,
        class_name: :Likesong

    def self.search(query)
        where("title ILIKE ?", "%#{query}%")
    end

end
