class Api::V1::UsersController < ApplicationController
  def check_user
    if current_user
        render json: {email: current_user.email }
    else
        render json: {Error: "Unauthorized" }
    end
  end
end
