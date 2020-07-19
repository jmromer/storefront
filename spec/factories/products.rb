# frozen_string_literal: true

FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "Product #{n.to_s.rjust(2)}" }
    price_cents { 9_99 }
    rating { 5 }
  end
end
