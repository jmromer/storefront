# frozen_string_literal: true

json.extract! cart, :id, :products, :cart_items
json.url api_cart_url(cart, format: :json)
json.update_url api_cart_cart_items_url(cart, format: :json)
