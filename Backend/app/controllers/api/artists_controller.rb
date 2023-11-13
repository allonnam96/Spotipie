class Api::ArtistsController < ApplicationController
    before_action :require_logged_in, only: %i(new, create, edit, update, destroy)
    before_action :set_artist, only: %i(show edit update destory)

    def index
        @artists = Artist.all
    end

    def show
    end

    def new
        @artist = Artist.new
    end

    def create
        @artist = Artist.new(artist_params)

        if @artist.save
            redirect_to artist_url(@artist)
        else
            flash.now[:errors] = @artist.errors.full_messages
            render :new
        end
    end

    def edit
    end

    def update
        if @artist.update(artist_params)
            redirect_to artist_url(@artist)
        else
            flash.noew[:errors] = @artist.errors.full_messages
            render :edit
        end 
    end

    def destroy
        @artist.destroy
        redirect_to artists_url
    end

    private

    def set_artist
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.require(:artist).permit(:name)
    end
end
