# frozen_string_literal: true

require "rails_helper"

RSpec.describe "/carts", type: :request do
  describe "POST #create" do
    it "creates a new Cart" do
      expect { post api_carts_url }.to change(Cart, :count).by(1)
      expect(response).to be_created
      expect(response_json).to have_keys(%i[id products url add_url])
    end
  end

  describe "GET #show" do
  end
end
