Rails.application.routes.draw do
  root 'homes#index' 
  devise_for :users
  namespace :api,defaults: { format: :json } do
    namespace :v1 do
        get 'homes/index'
        post 'homes/create'
        get '/show/:id', to: 'homes#show'
        delete '/destroy/:id', to: 'homes#destroy'
        get '/payments/index'
        post '/payments/create'
        get 'users/check_user'
      end
    end  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


# resources :payments



# resources :homes do 
#     resources :payments, shallow: true