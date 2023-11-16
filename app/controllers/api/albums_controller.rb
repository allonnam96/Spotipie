class Api::AlbumsController < ApplicationController
    
    def index
      # if params[:queries]
      #   @albums = params[:queries] === "" ? [] : Album.where("title ILIKE '%#{params[:queries]}%'")
      #   @albums.includes(:tracks)
      # else
      @albums = Album.includes(:tracks).all
    end
  
    def show
      @album = Album.includes(tracks: [:artist]).find(params[:id])
      @track_ids = @album.tracks.map { |track| track.id}
    end
  
  
  
    # private
    
    # def album_params
    #   params.require(:album).permit(:artist_id, :title, :year, :img_url)
    # end
  end
  