Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'homes/index'
      post 'homes/create'
      get '/show/:id', to: 'homes#show'
      delete '/destroy/:id', to: 'homes#destroy'
      # resources :payments

      get '/payments/index'
      post '/payments/create'
    end
   
  end

  root 'homes#index' 
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
