class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :html, :json

    def after_sign_in_path_for(resource)
        if resource.class == AdminUser
         admin_dashboard_path
        else resource.class == User
         root_path
        end
    end

    protected
      # Restrict parameters for sign up input.
    def configure_permitted_parameters
        added_attrs = [:email, :encrypted_password, :password_confirmation, :remember_me]
        devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs)
        devise_parameter_sanitizer.permit(:account_update, keys: added_attrs)
        devise_parameter_sanitizer.permit(:sign_in, keys: added_attrs)
    end
end
