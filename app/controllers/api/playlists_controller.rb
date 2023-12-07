class Api::PlaylistsController < ApplicationController

    def index
        if params[:queries]
            @playlists = params[:queries] === "" ? [] : Playlist.includes(:uploader, tracks: [:album. :artist, :playlist_tracks]).where("title ILIKE '%#{params[:queries]}%'")
        else
            @playlist = Playlist.includes(:uploader, tracks: [:album, :artist, :playlist_tracks]).all
        end
    end

    def show
        @playlist = Playlist.includes(:uploard, tracks: [:album, :artist, :playlist_tracks]).find(params[:id])
        @playlist_track_ids = @playlist.tracks.map { |track| track.id }
        @uploarder = User.find(@playlist.uploader_id)
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
        @playlist = Playlist.includes(:uploader, tracks: [:album, :artist, :playlist_tracks]).new(playlist_params)
        if @playlist.save
          @playlist_track_ids = @playlist.tracks.map { |track| track.id }
          @creator = User.find(@playlist.uploader_id)
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
    def playlist_params
        params.require(:playlist).permit(:title, :uploader_id)
    end
end
