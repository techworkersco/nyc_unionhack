class OfflineWorkersController < ApplicationController
  def show
    @offline_worker = OfflineWorker.find(params[:id])

    if current_user&.admin?
      @conversations = Conversation.where(offline_worker_id: params[:id])
    elsif current_user.organizer?
      @conversations = current_user.conversations.where(offline_worker_id: params[:id])
    end
  end
end
