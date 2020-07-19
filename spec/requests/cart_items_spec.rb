# frozen_string_literal: true

require "rails_helper"

RSpec.describe "/:cart/cart_items", type: :request do
  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new CartItem" do
        product = create(:product)
        cart = create(:cart)

        req = lambda do
          post cart_cart_items_url(cart),
               params: { cart_item: { product_id: product.id, cart_id: cart.id } }
        end

        expect { req.call }.to change(CartItem, :count).by(1)
        expect(response).to be_created
        expect(response_json).to have_keys(%i[id cart_id product_id quantity])
      end
    end

    context "with invalid parameters" do
      it "does not create a cart item, responds with error" do
        cart = create(:cart)

        req = lambda do
          post cart_cart_items_url(cart),
               params: { cart_item: { product_id: 99, cart_id: cart.id } }
        end

        expect { req.call }.to change(CartItem, :count).by(0)
        expect(response.status).to eq(422)
        expect(response_json).to have_keys(%i[errors])
        expect(response_json[:errors]).to include("Product must exist")
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested cart_item" do
      cart_item = create(:cart_item)
      expect {
        delete cart_cart_item_url(cart_item.cart, cart_item)
      }.to change(CartItem, :count).by(-1)
    end
  end
end
