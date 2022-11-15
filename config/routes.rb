Rails.application.routes.draw do
  resources :houses
  namespace :api do
    namespace :v1 do
      get 'home/index'
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
  root 'home#index' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


