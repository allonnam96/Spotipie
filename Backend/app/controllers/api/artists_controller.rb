class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.includes(:albums, :tracks).all
    end

    def show
        @artist = Artist.includes(:albums, :tracks).find(params[:id])
        @albums_id = @artist.album.map { |album| album.id }
        @tracks = @artist.tracks.order("RANDOM()").limit(5)
    end



    # private


    # def artist_params
    #     params.require(:artist).permit(:name)
    # end
end
