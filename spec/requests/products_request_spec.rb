# frozen_string_literal: true

require "rails_helper"

RSpec.describe "/products", type: :request do
  describe "GET /new" do
    it "renders a successful response" do
      get new_product_url
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      let(:attrs) { attributes_for(:product) }

      it "creates a new Product and re-renders the form" do
        expect {
          post products_url, params: { product: attrs }
        }.to change(Product, :count).by(1)

        expect(response).to have_http_status(:ok)
        expect(response).to render_template(:new)
        expect(flash.notice).to match(/Created.+#{attrs[:name]}/)
      end
    end

    context "with invalid parameters" do
      let(:attrs) { attributes_for(:product).merge(price_cents: "0.00") }

      it "does not create a new Product, re-renders the form" do
        expect {
          post products_url, params: { product: attrs }
        }.to change(Product, :count).by(0)

        expect(response).to have_http_status(:ok)
        expect(response).to render_template(:new)
        expect(flash.alert).to match(/must be greater than 0/)
      end
    end
  end
end
