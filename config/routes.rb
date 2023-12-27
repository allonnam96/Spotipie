Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :show] do 
      resources :songs, only: [:show]
      resources :likesongs, only: [:index]
      resources :recently_visiteds, only: [:index]
      get 'search', to: 'search#index'
    end
    resource :session, only: [:show, :create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:show, :update, :index, :create, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    resources :likesongs, only: [:create, :destroy]
    resources :recently_visiteds, only: [:create]
  end
  get '*path', to: "static_pages#frontend_index"
end