class Api::PlaylistsController < ApplicationController
  before_action :require_logged_in, :set_playlist, only: %i[ show update destroy ]

    def index
        if params[:queries]
            @playlists = params[:queries] === "" ? [] : Playlist.includes(:creator, songs: [:album, :artist, :playlist_songs]).where("title ILIKE '%#{params[:queries]}%'")
        else
            @playlists = Playlist.includes(:creator, songs: [:album, :artist, :playlist_songs]).all
        end
    end

    def show
        @playlist = Playlist.includes(:creator, songs: [:album, :artist, :playlist_songs]).find(params[:id])
        @playlist_song_ids = @playlist.songs.map { |song| song.id }
        @creator = User.find(@playlist.creator_id)
    end

    def update
        @playlist = Playlist.find(params[:id])
        if @playlist.update(playlist_params)
          render :show
        else
          render json: @playlist.errors.full_messages, status: 401
        end
    end

    def create
        @playlist = Playlist.includes(:creator, songs: [:album, :artist, :playlist_songs]).new(playlist_params)
        if @playlist.save
          @playlist_song_ids = @playlist.songs.map { |song| song.id }
          @creator = User.find(@playlist.creator_id)
          render :show
        else
          render json: @playlist.errors.full_messages, status: 401
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render json: ["Removed from your library"]
      end    

    private

    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    def playlist_params
        params.require(:playlist).permit(:title, :creator_id, :song)
    end
end
