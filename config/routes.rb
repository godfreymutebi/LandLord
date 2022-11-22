Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get 'homes/index'
      post 'homes/create'
      get '/show/:id', to: 'homes#show'
      delete '/destroy/:id', to: 'homes#destroy'
    end
  end
  devise_for :tenants, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'tenants/sessions',
    registrations: 'tenants/registrations'
  }
  root 'homes#index' 
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
