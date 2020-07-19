# frozen_string_literal: true

Rails.application.routes.draw do
  resources :cart, only: %i[show] do
    resources :cart_items, only: %i[create destroy]
  end

  resources :products, only: %i[index new create]

  root to: "products#index"
end
