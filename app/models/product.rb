# frozen_string_literal: true

class Product < ApplicationRecord
  validates :name, :price, presence: true
  validates :rating, numericality: { in: 1..5 }
  validates :price, numericality: { greater_than: 0 }
  has_one_attached :image
end
