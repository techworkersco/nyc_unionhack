class OfflineWorkersController < ApplicationController
  def show
    @offline_worker = OfflineWorker.find(params[:id])
    json_response(@offline_worker)
  end

  def index
    @offline_workers = OfflineWorker.all
    json_response(@offline_workers)
  end
end
