# frozen_string_literal: true

class CartItem < ApplicationRecord
  validates :cart, :product, presence: true
  validates :quantity, numericality: true
end
