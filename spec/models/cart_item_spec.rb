# frozen_string_literal: true

require "rails_helper"

RSpec.describe CartItem, type: :model do
  it { should validate_presence_of(:cart) }
  it { should validate_presence_of(:product) }
  it { should validate_numericality_of(:quantity).is_greater_than(0) }
  it { should belong_to(:cart).counter_cache(true) }
  it { should belong_to(:product) }
end
