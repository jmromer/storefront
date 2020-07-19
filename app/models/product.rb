# frozen_string_literal: true

class Product < ApplicationRecord
  validates :name, :price_cents, presence: true
  validates :price_cents, numericality: { greater_than: 0 }
  validates :rating,
            numericality: {
              greater_than_or_equal_to: 1,
              less_than_or_equal_to: 5,
            }, if: -> { rating.present? }

  has_one_attached :image
end
