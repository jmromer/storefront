# frozen_string_literal: true

Rails.application.routes.draw do
  resources :cart_items, only: %i[create update destroy]
  resources :carts, only: %i[edit update]
  resources :products, only: %i[index new create]
  root to: "products#index"
end
