Rails.application.routes.draw do
  devise_for :users
  get 'tweets/index'

  root "groups#index"
  resources :users, only: [:edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :tweets, only: [:index, :create]
  end
end
