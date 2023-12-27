class Api::AlbumsController < ApplicationController
  before_action :set_album, only: %i[ show update destroy ]
    
    def index
      if params[:queries]
        @albums = params[:queries] === "" ? [] : Album.where("title ILIKE '%#{params[:queries]}%'")
        @albums.includes(:songs)
      else
      @albums = Album.includes(:songs, :artist).all
    end
  end
  
    def show
      @album = Album.includes(songs: [:artist]).find(params[:id])
      @song_ids = @album.songs.map { |song| song.id}
    end
  
    private
    def set_album
      @album = Album.find(params[:id])
    end
    
    def album_params
      params.require(:album).permit(:artist_id, :title, :year, :img_url)
    end
  end
  