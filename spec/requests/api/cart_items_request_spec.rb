# frozen_string_literal: true

require "rails_helper"

RSpec.describe "cart/:id/cart_items", type: :request do
  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new CartItem" do
        product = create(:product)
        cart = create(:cart)

        req = lambda do
          post api_cart_cart_items_url(cart),
               params: { cart_item: { product_id: product.id, cart_id: cart.id } }
        end

        expect { req.call }.to change(CartItem, :count).by(1)
        expect(response).to have_http_status(:created)
        expect(response_json).to have_keys(cart_schema)
      end
    end

    context "with invalid parameters" do
      it "does not create a cart item, responds with error" do
        cart = create(:cart)

        req = lambda do
          post api_cart_cart_items_url(cart),
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
    context "given a found cart item" do
      it "destroys the requested cart_item, returning the cart" do
        cart_item = create(:cart_item)

        req = lambda do
          delete api_cart_cart_item_url(cart_item.cart, cart_item)
        end

        expect { req.call }.to change(CartItem, :count).by(-1)
        expect(response).to have_http_status(:ok)
        expect(response_json).to have_keys(cart_schema)
      end
    end

    context "given a cart item not found" do
      it "destroys the requested cart_item, returning the cart" do
        cart_item = create(:cart_item)

        req = lambda do
          delete api_cart_cart_item_url(cart_item.cart, 999)
        end

        expect { req.call }.to change(CartItem, :count).by(0)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response_json[:errors]).to include("Cart item not found.")
      end
    end
  end
end
