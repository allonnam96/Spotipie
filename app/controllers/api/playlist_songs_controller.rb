class Api::PlaylistSongsController < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        if @playlist_song.save
            render json: ["Song was added to your playlist"]
        else
            render json: @playlist_song.errors.full_messages, status: 401
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        @playlist_id = @playlist_song.playlist_id
    
        if @playlist_song.destroy
          @playlist = Playlist.find(@playlist_id)
          @playlist_song_ids = @playlist.songs.map { |song| song.id }
          @creator = User.find(@playlist.creator_id)
          render "/api/playlists/show"
        end
    end

    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
