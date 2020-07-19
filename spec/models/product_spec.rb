# frozen_string_literal: true

require "rails_helper"

RSpec.describe Product, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:price_cents) }
  it { should validate_numericality_of(:price_cents).is_greater_than(0) }
  it do
    should validate_numericality_of(:rating)
             .is_greater_than_or_equal_to(1)
             .is_less_than_or_equal_to(5)
  end
end
