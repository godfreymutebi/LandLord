class ApplicationController < ActionController::Base
  #protect_from_forgery with: :null_session
  # skip_before_action :verify_authenticity_token
  skip_before_action :verify_authenticity_token, :only => :create
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  protected
      # Restrict parameters for sign up input.
      def configure_permitted_parameters
        added_attrs = [:email, :encrypted_password, :password_confirmation, :remember_me]
        devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs)
        devise_parameter_sanitizer.permit(:account_update, keys: added_attrs)
        devise_parameter_sanitizer.permit(:sign_in, keys: added_attrs)
    end
end
