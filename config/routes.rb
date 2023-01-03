Rails.application.routes.draw do
 
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
        resources :homes do 
            resources :payments, shallow: true
          end
        get 'users/check_user'
      end
    end  
    root 'homes#index' 
    devise_for :users
    devise_for :admin_users, ActiveAdmin::Devise.config
    ActiveAdmin.routes(self)

    get "*unmatched", to: "homes#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
