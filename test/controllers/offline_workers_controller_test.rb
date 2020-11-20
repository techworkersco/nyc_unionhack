require 'test_helper'

class OfflineWorkersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get offline_workers_index_url
    assert_response :success
  end

end
