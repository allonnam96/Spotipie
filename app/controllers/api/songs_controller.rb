class Api::SongsController < ApplicationController
    
    before_action :set_song, only: %i[ show update destroy ]

    def index
        if (params[:songQueue] && params[:songQueue].length > 0)
            queue = params[:songQueue]
            queue = "(#{queue.join(', ')})"
            @search_results = Song.includes(:album, :artist).where("id IN #{queue}")
        else
            @search_results = params[:str] === "" ? [] : Song.with_attached_song_file.includes(:album, :artist).where("title ILIKE '%#{params[:str]}%'")
        end
    end

    def show

    end

    private

    def set_song
        @song = Song.find(params[:id])
    end

    def song_params
        params.require(:song).permit(:artist_id, :album_id, :duration, :title, :explicit)
    end
end
