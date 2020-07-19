# frozen_string_literal: true

class Product < ApplicationRecord
  validates :name, :price, presence: true
  validates :rating, numericality: { in: 1..5 }
  has_one_attached :image
end
