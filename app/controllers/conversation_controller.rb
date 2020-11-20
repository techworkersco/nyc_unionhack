class ConversationController < ApplicationController
  # def index
  #   @single_conversation = Conversation.new
  #   if current_user
  #     @workers = OfflineWorker.all
  #
  #     if current_user.admin?
  #       @conversations = Conversation.all
  #     elsif current_user.organizer?
  #       @conversations = current_user.conversations
  #     end
  #   end
  # end

  def index
    @
  end

  def create
    @conversasation = Conversation.new(params[:conversation])
    if conversasation.save
      redirect_to :index
    end
  end

  def show
    @conversation = Conversation.find(params[:id])
  end
end
