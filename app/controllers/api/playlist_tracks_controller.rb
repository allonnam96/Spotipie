class Api::PlaylistTracksController < ApplicationController

    def create
        @playlist_track = PlaylistTrack.new(playlist_track_params)
        if @playlist_track.save
            render json: ["Track was added to your playlist"]
        else
            render json: @playlist_track.errors.full_messages, status: 401
        end
    end

    def destroy
        @playlist_track = PlaylistTrack.find(params[:id])
        @playlist_id = @playlist_track.playlist_id
    
        if @playlist_track.destroy
          @playlist = Playlist.find(@playlist_id)
          @playlist_track_ids = @playlist.tracks.map { |track| track.id }
          @uploader = User.find(@playlist.uploader_id)
          render "/api/playlists/show"
        end
    end

    def playlist_track_params
        params.require(:playlist_track).permit(:playlist_id, :track_id)
    end
end
