# frozen_string_literal: true

Rails.application.routes.draw do
  resources :home, only: :index
  resources :products, only: %i[new create]

  namespace :api, defaults: { format: :json } do
    resources :carts, only: %i[create show] do
      resources :cart_items, only: %i[create destroy]
    end
  end

  root to: "home#index"
end
