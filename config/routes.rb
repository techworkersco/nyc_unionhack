Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :offline_workers, only: [:index, :show] do
    resources :conversations, only: [:index, :show]
  end
end
