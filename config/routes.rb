Rails.application.routes.draw do
  resources :conversation
  get 'offline_worker/show'
  get 'offline_workers/index'

  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
