# frozen_string_literal: true

class CartItem < ApplicationRecord
  validates :cart, :product, presence: true
  validates :quantity, numericality: { greater_than: 0 }

  belongs_to :cart, counter_cache: true
  belongs_to :product
end
