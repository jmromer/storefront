# frozen_string_literal: true

FactoryBot.define do
  factory :cart_item do
    cart_id { 1 }
    quantity { 1 }
    product_id { 1 }
  end
end
