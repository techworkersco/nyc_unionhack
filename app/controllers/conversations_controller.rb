class ConversationsController < ApplicationController
  def show
    @conversation = Conversation.find(params[:id])
    json_response(@conversation)
  end

  def index
    @offline_worker = OfflineWorker.find(params[:offline_worker_id])
    @conversations = @offline_worker.conversations
    json_response(@conversations)
  end
end
