# frozen_string_literal: true

require "rails_helper"

RSpec.describe Cart, type: :model do
  it { should have_many(:cart_items) }
end
