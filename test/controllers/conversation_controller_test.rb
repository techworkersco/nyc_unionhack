require 'test_helper'

class ConversationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get conversation_index_url
    assert_response :success
  end

end
