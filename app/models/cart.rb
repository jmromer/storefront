# frozen_string_literal: true

class Cart < ApplicationRecord
  validates :visitor_id, presence: true
end
