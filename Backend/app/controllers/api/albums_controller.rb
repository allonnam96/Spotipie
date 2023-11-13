class Api::AlbumsController < ApplicationController
    before_action :require_logged_in, only: %i(new, create, edit, update, destroy)
    before_action :set_album, only: %i(show edit update destroy)
    
    def show
    end
  
    def new
      @artist = Artist.find(params[:artist_id])
      @album = Album.new(artist_id: params[:artist_id])
    end
  
    def create
      @album = Album.new(album_params)
  
      if @album.save
        redirect_to album_url(@album)
      else
        @artist = @album.artist
        flash.now[:errors] = @album.errors.full_messages
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @album.update(album_params)
        redirect_to album_url(@album)
      else
        flash.now[:errors] = @album.errors.full_messages
        render :edit
      end
    end
  
    def destroy
      @album.destroy
      redirect_to artist_url(@album.artist_id)
    end
  
    private
  
    def set_album
      @album = Album.find(params[:id])
    end
    
    def album_params
      params.require(:album).permit(:artist_id, :title, :year, :img_url)
    end
  end
  