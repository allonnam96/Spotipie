class Api::ArtistsController < ApplicationController
    before_action :set_artist, only: %i[show]

    def index
        if params[:queries]
            @artists = params[:queries] === "" ? [] : Artist.where("name ILIKE '%#{params[:queries]}%'")
        else
            @artists = Artist.includes(:albums, :songs).all
        end
    end

    def show
        @artist = Artist.includes(:albums, :songs).find(params[:id])
        @albums_ids = @artist.albums.map { |album| album.id }
        @songs = @artist.songs.order("RANDOM()").limit(5)
    end

    private

    def set_artist
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.require(:artist).permit(:name, :verified, :about, :about_img, :rank, :listeners)
    end
end
