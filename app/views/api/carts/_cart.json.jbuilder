# frozen_string_literal: true

json.extract! cart, :id, :products
json.url api_cart_url(cart, format: :json)
json.add_url api_cart_cart_items_url(cart, format: :json)
