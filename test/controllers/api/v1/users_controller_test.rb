require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get check_user" do
    get api_v1_users_check_user_url
    assert_response :success
  end
end
