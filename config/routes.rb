Rails.application.routes.draw do
  devise_for :tenants, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'tenants/sessions',
    registrations: 'tenants/registrations'
  }
  root 'roots#index' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


