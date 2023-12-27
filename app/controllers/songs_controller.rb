class SongsController < ApplicationController
    before_action :set_song, only: %i[ show update destroy ]

    def index
        @songs = Song.includes(:album, :artist).all
    end

    def show
        @user = User.find(params[:user_id])
        @song = Song.find(params[:id])
        @user.current_song_id = @song.id
        render :show
    end

    def search
        @search_results = Song.all.map { |song| song.title.downcase }.select { |word| word.match(/#{params[:str]}/)}
    end

    private
    def set_song
        @song = Song.find(params[:id])
    end
    
    def song_params
        params.require(:song).permit(:artist_id, :album_id, :duration, :title, :explicit)
    end
end