# frozen_string_literal: true

FactoryBot.define do
  factory :cart_item do
    cart { create(:cart) }
    product { create(:product) }
    quantity { 1 }
  end
end
