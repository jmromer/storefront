# frozen_string_literal: true

require "rails_helper"

RSpec.describe "/carts", type: :request do
  describe "POST #create" do
    it "creates a new Cart" do
      expect { post api_carts_url }.to change(Cart, :count).by(1)

      expect(response).to have_http_status(:created)
      expect(response_json).to have_keys(cart_schema)
    end
  end

  describe "GET #show" do
    context "given a found cart" do
      it "responds with ok" do
        cart = create(:cart)

        get api_cart_url(cart)

        expect(response).to have_http_status(:ok)
        expect(response_json).to have_keys(cart_schema)
      end
    end

    context "given a cart that's not found" do
      it "responds with not found" do
        get api_cart_url(99)

        expect(response).to have_http_status(:not_found)
        expect(response_json).to have_keys(%i[errors])
      end
    end
  end
end
